
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from common.career_engine import (CAREER_PATHS,detect_career_path)
from .copilot_engine import generate_ai_response
from skills.models import Skill
from placement.models import PlacementReadiness
from resumes.models import ResumeAnalysis



class AICareerCopilotView(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request):

        question = request.data.get(
            "question",
            ""
        ).lower()

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

        placement = (
            PlacementReadiness.objects
            .filter(user=user)
            .first()
        )

        placement_score = (
            placement.placement_score
            if placement
            else 0
        )

        resume = (
            ResumeAnalysis.objects
            .filter(user=user)
            .order_by("-created_at")
            .first()
        )

        resume_score = (
            resume.score
            if resume
            else 0
        )

        # =================================
        # AI Responses
        # =================================

        response = generate_ai_response(
    question=question,
    career_path=career_path,
    placement_score=placement_score,
    resume_score=resume_score,
    missing_skills=missing_skills,
    current_skills=skill_names,
)
        return Response({

       "career_path": career_path,
   
       "placement_score": placement_score,
   
       "resume_score": resume_score,
   
       "missing_skills": missing_skills,
   
       "intent": response["intent"],
   
       "answer": response["answer"]

})