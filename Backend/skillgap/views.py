from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from skills.models import Skill
from common.career_engine import (
    detect_career_path
)


class SkillGapView(APIView):

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

        career_path = (
            detect_career_path(
                skill_names
            )
        )

        required_skills = []

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

        return Response({

            "career_path":
            career_path,

            "current_skills":
            skill_names,

            "required_skills":
            required_skills,

            "missing_skills":
            missing_skills,

            "gap_percentage":
            gap_percentage
        })