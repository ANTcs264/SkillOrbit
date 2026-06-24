from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from skills.models import Skill
from common.career_engine import (CAREER_PATHS,detect_career_path)

class JobRecommendationView(APIView):

     permission_classes = [
        IsAuthenticated
    ]

     def get(self, request):

        print("==== JOB API ====")
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
        # Career Path Detection
        career_path = detect_career_path(
         skill_names)
        
        career_data = CAREER_PATHS.get(
          career_path,{})

        jobs = career_data.get(
         "jobs",[])
        

        recommendations = []

       

      

        course_map = {

            "git":
            "Git & GitHub Mastery",

            "sql":
            "SQL for Developers",

            "docker":
            "Docker Essentials",

            "deep learning":
            "Deep Learning Fundamentals",

            "opencv":
            "Computer Vision with OpenCV",

            "aws":
            "AWS Cloud Practitioner",

            "statistics":
            "Statistics for Data Science"
        }

        for job in jobs:

            matched_skills = []

            missing_skills = []

            for skill in job[
                "required_skills"
            ]:

                if skill in skill_names:

                    matched_skills.append(
                        skill
                    )

                else:

                    missing_skills.append(
                        skill
                    )

            readiness = round(
                (
                    len(
                        matched_skills
                    ) /
                    len(
                        job[
                            "required_skills"
                        ]
                    )
                ) * 100,
                2
            )

            recommended_courses = []

            for skill in missing_skills:

                if skill in course_map:

                    recommended_courses.append(
                        course_map[
                            skill
                        ]
                    )


            recommendations.append({

                "job_title":
                job["title"],

                "career_path":
                career_path,

                "readiness":
                readiness,

                "experience_level":
                "Fresher",

                "salary_range":
                job["salary"],

                "demand_level":
                job["demand"],

                "matched_skills":
                matched_skills,

                "missing_skills":
                missing_skills,

                "recommended_courses":
                recommended_courses
            })

        recommendations.sort(
            key=lambda x:
            x["readiness"],
            reverse=True
        )

        return Response(
            recommendations
        )