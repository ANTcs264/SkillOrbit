from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from skills.models import Skill

from common.career_engine import (
    detect_career_path
)


class PlacementReadinessView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        user = request.user

        skills = Skill.objects.filter(
            user=user
        )

        skill_names = list(
            set(
                skill.skill.lower()
                for skill in skills
            )
        )

        career_path = detect_career_path(
            skill_names
        )

        if career_path == "AI/ML Engineer":

            required_skills = [
                "python",
                "machine learning",
                "git",
                "sql",
                "docker",
                "deep learning",
                "aws"
            ]

        elif career_path == "Backend Developer":

            required_skills = [
                "python",
                "django",
                "sql",
                "git",
                "docker"
            ]

        elif career_path == "Frontend Developer":

            required_skills = [
                "html",
                "css",
                "javascript",
                "react",
                "git"
            ]

        else:

            required_skills = []

        missing_skills = []

        for skill in required_skills:

            if skill not in skill_names:

                missing_skills.append(
                    skill
                )

        gap_percentage = round(
            (
                len(missing_skills)
                /
                len(required_skills)
            ) * 100,
            2
        ) if required_skills else 0

        skill_score = round(
            100 - gap_percentage,
            2
        )

        resume_score = 100

        job_readiness = skill_score

        placement_score = round(
            (
                resume_score * 0.4 +
                job_readiness * 0.4 +
                skill_score * 0.2
            ),
            2
        )

        if placement_score >= 85:

            status = "Interview Ready"

        elif placement_score >= 70:

            status = "Placement Ready"

        else:

            status = "Needs Improvement"

        return Response({

            "career_path":
            career_path,

            "placement_score":
            placement_score,

            "resume_score":
            resume_score,

            "skill_score":
            skill_score,

            "job_readiness":
            job_readiness,

            "gap_percentage":
            gap_percentage,

            "missing_skills":
            missing_skills,

            "status":
            status
        })