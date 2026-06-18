from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from skills.models import Skill


class CareerRoadmapView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        user = request.user

        skills = Skill.objects.filter(
            user=user
        )

        skill_names = [
            skill.skill.lower()
            for skill in skills
        ]

        career_path = "General"

        if (
            "python" in skill_names and
            "machine learning" in skill_names
        ):
            career_path = "AI/ML Engineer"

        elif (
            "django" in skill_names or
            "flask" in skill_names
        ):
            career_path = "Backend Developer"

        elif (
            "react" in skill_names or
            "javascript" in skill_names
        ):
            career_path = "Frontend Developer"

        roadmap = []
        readiness = 0
        current_level = "Beginner"

        if career_path == "AI/ML Engineer":

            current_level = "Intermediate"

            required_skills = [
                "python",
                "machine learning",
                "git",
                "sql",
                "docker",
                "deep learning"
            ]

            matched = len(
                [
                    s for s in required_skills
                    if s in skill_names
                ]
            )

            readiness = round(
                (matched / len(required_skills)) * 100,
                2
            )

            roadmap = [

                {
                    "step": 1,
                    "title": "Master Python"
                },

                {
                    "step": 2,
                    "title": "Learn Deep Learning"
                },

                {
                    "step": 3,
                    "title": "Build AI Projects"
                },

                {
                    "step": 4,
                    "title": "Learn MLOps"
                },

                {
                    "step": 5,
                    "title": "Apply for AI Internships"
                }
            ]

        return Response({

            "career_path": career_path,

            "current_level": current_level,

            "readiness": readiness,

            "roadmap": roadmap
        })
