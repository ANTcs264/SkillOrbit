from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from skills.models import Skill

from .coach_engine import (
    generate_career_advice
)


class CareerCoachView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        skills = Skill.objects.filter(
            user=request.user
        )

        skill_names = list(
            set(
                skill.skill.lower()
                for skill in skills
            )
        )

        advice = (
            generate_career_advice(
                skill_names
            )
        )

        return Response(advice)