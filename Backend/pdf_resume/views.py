from django.shortcuts import render

# Create your views here.
from django.http import FileResponse

from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

from profiles.models import Profile
from skills.models import Skill
from resumes.models import Resume
from resumes.models import ResumeAnalysis
from placement.models import PlacementReadiness

from common.career_engine import (
    detect_career_path
)

from .pdf_engine import (
    generate_resume_pdf
)


class ResumePDFView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        user = request.user

        profile = Profile.objects.get(
            user=user
        )

        resume, created = (
            Resume.objects.get_or_create(
                user=user
            )
        )

        skills = Skill.objects.filter(
            user=user
        )

        skill_names = list(
    set(
        skill.skill
        for skill in skills
    )
)

        career_path = detect_career_path(
            [
                skill.lower()
                for skill in skill_names
            ]
        )

        analysis = (
            ResumeAnalysis.objects.filter(
                user=user
            ).first()
        )

        placement = (
            PlacementReadiness.objects.filter(
                user=user
            ).first()
        )

        pdf_data = {

            "name":
            user.username,

            "email":
            user.email,

            "summary":
            resume.summary or "Not Added",

            "skills":
            skill_names,

            "career_path":
            career_path,

            "resume_score":
            (
                analysis.score
                if analysis
                else 0
            ),

            "placement_score":
            (
                placement.placement_score
                if placement
                else 0
            ),

            "github":
            profile.github,

            "linkedin":
            profile.linkedin,

            "college":
            profile.college,

            "graduation_year":
            profile.graduation_year,

            "bio":
            profile.bio
        }

        pdf_buffer = generate_resume_pdf(
            pdf_data
        )

        return FileResponse(
            pdf_buffer,
            as_attachment=True,
            filename=(
                f"{user.username}_Resume.pdf"
            )
        )
