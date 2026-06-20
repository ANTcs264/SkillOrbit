from django.db import models

# Create your models here.
from django.db import models
from django.conf import settings


class ReviewHistory(models.Model):

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="review_history"
    )

    career_path = models.CharField(
        max_length=100
    )

    overall_score = models.FloatField(
        default=0
    )

    strengths = models.JSONField(
        default=list
    )

    weaknesses = models.JSONField(
        default=list
    )

    recommendations = models.JSONField(
        default=list
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):

        return (
            f"{self.user.username} - "
            f"{self.overall_score}"
        )