from django.db import models
from django.conf import settings


class ProgressSnapshot(models.Model):

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    resume_score = models.FloatField(
        default=0
    )

    placement_score = models.FloatField(
        default=0
    )

    skill_gap = models.FloatField(
        default=0
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):

        return (
            f"{self.user.username} - "
            f"{self.created_at.date()}"
        )