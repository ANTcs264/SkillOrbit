from django.shortcuts import render

# Create your views here.
from .resume_engine import (
    get_missing_skills,
    calculate_resume_score,
    calculate_resume_completeness,
    generate_roadmap
)
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import Resume
from .serializers import ResumeSerializer

from rest_framework.views import APIView
from rest_framework.response import Response

from profiles.models import Profile

from quizzes.models import QuizAttempt
from skills.models import Skill
from .models import ResumeAnalysis



class ResumeView(
    generics.RetrieveUpdateAPIView
):

    serializer_class = ResumeSerializer

    permission_classes = [
        IsAuthenticated
    ]

    def get_object(self):

        resume, created = (
            Resume.objects.get_or_create(
                user=self.request.user
            )
        )
        return resume

class ResumeBuilderView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        user = request.user

        profile = Profile.objects.get(
            user=user
        )

        skills = Skill.objects.filter(
            user=user
        )

        resume, created = (
            Resume.objects.get_or_create(
                user=user
            )
        )

        attempts = QuizAttempt.objects.filter(
            user=user
        )

        quizzes_attempted = attempts.count()

        average_score = 0

        if quizzes_attempted > 0:

            total_score = sum(
                attempt.score
                for attempt in attempts
            )

            average_score = (
                total_score /
                quizzes_attempted
            )

        skill_list = [
            skill.skill
            for skill in skills
        ]

        return Response({

         "name": user.username,
     
         "email": user.email,
     
         "bio": profile.bio,
     
         "github": profile.github,
     
         "linkedin": profile.linkedin,
     
         "college": profile.college,
     
         "graduation_year":
         profile.graduation_year,
     
         "summary":
         resume.summary,
     
         "skills":
         skill_list,
     
         "analytics": {

        "quizzes_attempted":
        quizzes_attempted,

        "average_score":
        average_score

    }

})
class ResumeAnalysisView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        user = request.user

        profile = Profile.objects.get(
            user=user
        )

        resume = Resume.objects.get(
            user=user
        )

        skills = Skill.objects.filter(
            user=user
        )

        skill_names = list(
        set(
           skill.skill.lower()
           for skill in skills
    )
)

        career_path, _, missing_skills = (
        get_missing_skills(
        skill_names
    )
)

        # Resume Score Calculation
      
        score, strengths, suggestions = (
         calculate_resume_score(
        resume,
        profile,
        skill_names
    )
)
        
        # Save Analysis
        
        analysis = ResumeAnalysis.objects.filter(
        user=user
        ).first()
        
        if analysis:
        
            analysis.score = score
            analysis.strengths = strengths
            analysis.suggestions = suggestions
            analysis.save()
        
        else:
        
            analysis = ResumeAnalysis.objects.create(
                user=user,
                score=score,
                strengths=strengths,
                suggestions=suggestions
    )

        # Recommended Courses
        recommended_courses = []

        course_map = {

            "git":
            "Git Fundamentals",

            "sql":
            "SQL for Developers",

            "docker":
            "Docker Essentials",

            "machine learning":
            "Machine Learning Basics",

            "react":
            "React Masterclass"
        }

        for skill in missing_skills:

            if skill in course_map:

                recommended_courses.append(
                    course_map[skill]
                )

        ats_score = score
            
        resume_completeness = (
    calculate_resume_completeness(
        resume,
        profile,
        skill_names
    )
)
        if ats_score >= 85:

         placement_readiness = (
        "Interview Ready")
       
        elif ats_score >= 60:
       
           placement_readiness = (
               "Needs Improvement"
           )
       
        else:
       
           placement_readiness = (
               "Not Ready"
           )

        roadmap = generate_roadmap(
        missing_skills,
        profile,
       skill_names
)
        return Response({

     "resume_score": score,

     "ats_score": ats_score,

     "resume_completeness":
     resume_completeness,

     "placement_readiness":
     placement_readiness,

     "career_path":
     career_path,

     "strengths":
     strengths,

     "suggestions":
     suggestions,

     "missing_skills":
     missing_skills,

     "recommended_courses":
     recommended_courses,

     "roadmap":
     roadmap,

     "analysis_id":
     analysis.id

})
