from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from skills.models import Skill
from common.career_engine import (detect_career_path)


class JobRecommendationView(APIView):

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

        # Career Path Detection
        career_path = detect_career_path(
         skill_names
)

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

        recommendations = []

        # AI/ML Career Path
        if career_path == "AI/ML Engineer":

            jobs = [
                {
                    "title":
                    "Machine Learning Engineer",

                    "required_skills": [
                        "python",
                        "machine learning",
                        "git",
                        "sql",
                        "docker"
                    ],

                    "salary":
                    "8-18 LPA",

                    "demand":
                    "Very High"
                },

                {
                    "title":
                    "Data Scientist",

                    "required_skills": [
                        "python",
                        "machine learning",
                        "sql",
                        "statistics"
                    ],

                    "salary":
                    "7-16 LPA",

                    "demand":
                    "High"
                },

                {
                    "title":
                    "AI Engineer",

                    "required_skills": [
                        "python",
                        "machine learning",
                        "deep learning",
                        "docker"
                    ],

                    "salary":
                    "8-20 LPA",

                    "demand":
                    "Very High"
                },

                {
                    "title":
                    "Computer Vision Engineer",

                    "required_skills": [
                        "python",
                        "opencv",
                        "deep learning"
                    ],

                    "salary":
                    "10-22 LPA",

                    "demand":
                    "High"
                },

                {
                    "title":
                    "MLOps Engineer",

                    "required_skills": [
                        "python",
                        "docker",
                        "git",
                        "aws"
                    ],

                    "salary":
                    "10-24 LPA",

                    "demand":
                    "Very High"
                }
            ]

        elif career_path == "Backend Developer":

            jobs = [
                {
                    "title":
                    "Backend Developer",

                    "required_skills": [
                        "python",
                        "django",
                        "sql",
                        "git"
                    ],

                    "salary":
                    "6-12 LPA",

                    "demand":
                    "High"
                }
            ]

        elif career_path == "Frontend Developer":

            jobs = [
                {
                    "title":
                    "Frontend Developer",

                    "required_skills": [
                        "html",
                        "css",
                        "javascript",
                        "react"
                    ],

                    "salary":
                    "5-10 LPA",

                    "demand":
                    "High"
                }
            ]

        else:

            jobs = []

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