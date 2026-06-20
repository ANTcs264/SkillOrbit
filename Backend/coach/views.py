from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from skills.models import Skill
from resumes.models import ResumeAnalysis
from placement.models import PlacementReadiness

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

        analysis = (
            ResumeAnalysis.objects.filter(
                user=request.user
            ).first()
        )

        placement = (
            PlacementReadiness.objects.filter(
                user=request.user
            ).first()
        )

        resume_score = (
            analysis.score
            if analysis
            else 0
        )

        placement_score = (
            placement.placement_score
            if placement
            else 0
        )

        advice = generate_career_advice(
            skill_names,
            resume_score,
            placement_score
        )

        return Response(advice)