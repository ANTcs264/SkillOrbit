
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from skills.models import Skill
from placement.models import PlacementReadiness
from resumes.models import ResumeAnalysis

from common.career_engine import (
    CAREER_PATHS,
    detect_career_path
)


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

        if (
            "ai engineer" in question
            or "aiml" in question
            or "machine learning" in question
        ):

            answer = f"""
Current Career Path: {career_path}

Current Placement Score: {placement_score}%

To become an AI/ML Engineer:

1. Learn Deep Learning
2. Learn TensorFlow / PyTorch
3. Learn AWS or Azure
4. Build 2 Production AI Projects
5. Practice DSA

Missing Skills:
{', '.join(missing_skills) if missing_skills else 'None'}

Estimated Timeline:
4-6 Months
"""

        elif "aws" in question:

            answer = """
AWS Learning Roadmap

Week 1:
Cloud Fundamentals

Week 2:
EC2 + S3

Week 3:
IAM + Networking

Week 4:
Deploy ML Project on AWS

Final Goal:
Deploy a production-ready AI application.
"""

        elif "resume" in question:

            answer = f"""
Resume Score: {resume_score}

Suggestions:

• Add measurable achievements
• Add GitHub project links
• Add deployed project links
• Add certifications
• Improve project descriptions

Target Resume Score:
90+
"""

        elif (
            "job" in question
            or "placement" in question
        ):

            answer = f"""
Career Path:
{career_path}

Placement Score:
{placement_score}%

Resume Score:
{resume_score}

Missing Skills:
{', '.join(missing_skills) if missing_skills else 'None'}

Recommended Certification:
Microsoft Azure AI-900

Recommended Project:
Computer Vision Attendance System
"""

        elif (
            "skill" in question
            or "missing" in question
        ):

            answer = f"""
Current Career Path:
{career_path}

Missing Skills:

{', '.join(missing_skills) if missing_skills else 'No Missing Skills'}

Focus on these skills first to increase your placement readiness.
"""

        else:

            answer = f"""
SkillOrbit AI Career Copilot

Career Path:
{career_path}

Placement Score:
{placement_score}%

Resume Score:
{resume_score}

Missing Skills:
{', '.join(missing_skills) if missing_skills else 'None'}

You can ask:

• Can I become AI Engineer?
• How should I learn AWS?
• Review my resume
• What jobs can I get?
• What skills am I missing?
"""

        return Response({
            "career_path": career_path,
            "placement_score": placement_score,
            "resume_score": resume_score,
            "missing_skills": missing_skills,
            "answer": answer
        })