from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import Resume
from .serializers import ResumeSerializer

from rest_framework.views import APIView
from rest_framework.response import Response

from profiles.models import Profile
from skills.models import Skill
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

        skill_names = [
            skill.skill.lower()
            for skill in skills
        ]

        # Career Path Detection
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

        # Missing Skills Detection
        missing_skills = []

        required_skills = []

        if career_path == "AI/ML Engineer":

            required_skills = [
                "python",
                "machine learning",
                "git",
                "sql",
                "docker"
            ]

        elif career_path == "Backend Developer":

            required_skills = [
                "python",
                "django",
                "git",
                "sql",
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

        for skill in required_skills:

            if skill not in skill_names:

                missing_skills.append(skill)

        # Resume Score Calculation
        score = 0

        strengths = []

        suggestions = []

        if resume.summary:

            score += 20

            strengths.append(
                "Professional summary added"
            )

        else:

            suggestions.append(
                "Add a professional summary"
            )

        if profile.bio:

            score += 15

            strengths.append(
                "Profile bio completed"
            )

        else:

            suggestions.append(
                "Complete your profile bio"
            )

        if len(skill_names) >= 5:

            score += 30

            strengths.append(
                "Strong skill portfolio"
            )

        else:

            suggestions.append(
                "Add more technical skills"
            )

        if profile.linkedin:

            score += 15

            strengths.append(
                "LinkedIn profile added"
            )

        else:

            suggestions.append(
                "Add LinkedIn profile"
            )

        if profile.github:

            score += 20

            strengths.append(
                "GitHub profile added"
            )

        else:

            suggestions.append(
                "Add GitHub profile"
            )

        # Save Analysis
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
            
        completed_fields = 0
            
        total_fields = 7
            
        if resume.summary:
                completed_fields += 1
            
        if profile.bio:
                completed_fields += 1
            
        if profile.github:
                completed_fields += 1
            
        if profile.linkedin:
                completed_fields += 1
            
        if profile.college:
                completed_fields += 1
            
        if profile.graduation_year:
                completed_fields += 1
            
        if len(skill_names) > 0:
                completed_fields += 1
            
        resume_completeness = round(
                (completed_fields / total_fields) * 100,
                2
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

        roadmap = []

        for skill in missing_skills:

         roadmap.append(
        f"Learn {skill.title()}"
         )
        
        if len(skill_names) < 5:
        
            roadmap.append(
                "Add More Technical Skills"
            )
        
        if not profile.github:
        
            roadmap.append(
                "Create GitHub Portfolio"
            )
        
        if not profile.linkedin:
        
            roadmap.append(
                "Create LinkedIn Profile"
            )
        
        roadmap.append(
    "Build 2 Major Projects"
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
