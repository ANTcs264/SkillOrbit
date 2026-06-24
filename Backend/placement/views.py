from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from resumes.models import ResumeAnalysis
from skills.models import Skill
from jobs.models import JobRecommendation
from .models import PlacementReadiness

from common.career_engine import (
    CAREER_PATHS,
    detect_career_path
)


class PlacementReadinessView(APIView):

    permission_classes = [
        IsAuthenticated
    ]
    def get(self, request):

        print("==== PLACEMENT API ====")
        print("USER:", request.user)
        print("AUTH:", request.auth)
    
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
         career_path, {})

        required_skills = career_data.get(
          "required_skills",[])

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

        analysis = ResumeAnalysis.objects.filter( user=user).order_by("-created_at").first()

        resume_score = (analysis.score
              if analysis
              else 0
              )

        job_recommendations = JobRecommendation.objects.filter(user=user).order_by("-readiness")

        if job_recommendations.exists():

         job_readiness = (
         job_recommendations.first().readiness)

        else:

         job_readiness = skill_score

        placement_score = round(
            (
                resume_score * 0.4 +
                job_readiness * 0.4 +
                skill_score * 0.2
            ),2
        )

        if placement_score >= 85:

            status = "Interview Ready"

        elif placement_score >= 70:

            status = "Placement Ready"

        else:

            status = "Needs Improvement"


        PlacementReadiness.objects.update_or_create(

         user=user,
     
         defaults={
    
            "placement_score":
            placement_score,
    
            "resume_score":
            resume_score,
    
            "skill_score":
            skill_score,
    
            "job_readiness":
            job_readiness,
    
            "status":
            status
    }
)    

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