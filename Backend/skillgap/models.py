from django.db import models
from django.conf import settings


class SkillGapAnalysis(models.Model):

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    career_path = models.CharField(
        max_length=100
    )

    current_skills = models.JSONField(
        default=list
    )

    required_skills = models.JSONField(
        default=list
    )

    missing_skills = models.JSONField(
        default=list
    )

    gap_percentage = models.FloatField()

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return (
            f"{self.user.username} - "
            f"{self.career_path}"
        )