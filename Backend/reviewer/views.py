from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from skills.models import Skill
from resumes.models import ResumeAnalysis
from placement.models import PlacementReadiness
from .models import ReviewHistory

from common.career_engine import (
    CAREER_PATHS,
    detect_career_path
)

from .review_engine import (
    generate_resume_review
)


class ResumeReviewView(APIView):

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

        
        analysis = (
          ResumeAnalysis.objects.filter(
          user=request.user
           ).order_by("-created_at")
           .first()
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

        review = generate_resume_review(
            career_path,
            resume_score,
            placement_score,
            missing_skills
        )
        ReviewHistory.objects.create(

        user=request.user,

        career_path=review[
        "career_path"
    ],

        overall_score=review[
        "overall_score"
    ],

        strengths=review[
        "strengths"
    ],
      
          weaknesses=review[
              "weaknesses"
          ],
      
          recommendations=review[
              "recommendations"
          ]
)      


        return Response(
            review
        )
class ReviewHistoryView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        reviews = ReviewHistory.objects.filter(
            user=request.user
        ).order_by("-created_at")

        data = []

        for review in reviews:

            data.append({

                "date":
                review.created_at.date(),

                "career_path":
                review.career_path,

                "overall_score":
                review.overall_score
            })

        return Response(data)    