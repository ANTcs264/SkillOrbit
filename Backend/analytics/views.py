from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from skills.models import Skill
from enrollments.models import Enrollment
from quizzes.models import QuizAttempt
from resumes.models import ResumeAnalysis

from common.career_engine import (
    CAREER_PATHS,
    detect_career_path
)

from .models import ProgressSnapshot


class DashboardView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        user = request.user

        skills_count = Skill.objects.filter(
            user=user
        ).count()

        courses_enrolled = Enrollment.objects.filter(
            user=user
        ).count()

        attempts = QuizAttempt.objects.filter(
            user=user
        )

        quizzes_attempted = attempts.count()

        average_score = 0
        highest_score = 0
        lowest_score = 0
        pass_rate = 0

        if quizzes_attempted > 0:

            scores = [
                attempt.score
                for attempt in attempts
            ]

            average_score = (
                sum(scores)
                / quizzes_attempted
            )

            highest_score = max(scores)

            lowest_score = min(scores)

            passed_attempts = attempts.filter(
                score__gte=1
            ).count()

            pass_rate = round(
                (
                    passed_attempts
                    / quizzes_attempted
                ) * 100,
                2
            )

        skill_names = list(
            set(
                skill.skill.lower()
                for skill in Skill.objects.filter(
                    user=user
                )
            )
        )

        career_path = detect_career_path(
            skill_names
        )

        career_data = CAREER_PATHS.get(
            career_path,
            {}
        )

        required_skills = career_data.get(
            "required_skills",
            []
        )

        missing_skills = []

        for skill in required_skills:

            if skill not in skill_names:

                missing_skills.append(
                    skill
                )

        skill_gap = round(
            (
                len(missing_skills)
                /
                len(required_skills)
            ) * 100,
            2
        ) if required_skills else 0

        analysis = ResumeAnalysis.objects.filter(
            user=user
        ).first()

        resume_score = (
            analysis.score
            if analysis
            else 0
        )

        placement_score = round(
            (
                resume_score * 0.4 +
                (100 - skill_gap) * 0.6
            ),
            2
        )

        ProgressSnapshot.objects.create(

            user=user,

            resume_score=resume_score,

            placement_score=placement_score,

            skill_gap=skill_gap
        )

        return Response({

            "career_path":
            career_path,

            "resume_score":
            resume_score,

            "placement_score":
            placement_score,

            "skill_gap":
            skill_gap,

            "missing_skills":
            missing_skills,

            "skills_count":
            skills_count,

            "courses_enrolled":
            courses_enrolled,

            "quizzes_attempted":
            quizzes_attempted,

            "average_score":
            average_score,

            "highest_score":
            highest_score,

            "lowest_score":
            lowest_score,

            "pass_rate":
            pass_rate
        })


class ProgressHistoryView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        snapshots = ProgressSnapshot.objects.filter(
            user=request.user
        ).order_by(
            "-created_at"
        )[:10]

        data = []

        for snapshot in snapshots:

            data.append({

                "date":
                snapshot.created_at.strftime(
                    "%Y-%m-%d"
                ),

                "resume_score":
                snapshot.resume_score,

                "placement_score":
                snapshot.placement_score,

                "skill_gap":
                snapshot.skill_gap
            })

        return Response(data)