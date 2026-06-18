from django.db import models

# Create your models here.
from django.db import models
from django.conf import settings


class CareerRoadmap(models.Model):

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    career_path = models.CharField(
        max_length=100
    )

    current_level = models.CharField(
        max_length=50
    )

    readiness = models.FloatField()

    roadmap = models.JSONField()

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):

        return (
            f"{self.user.username} - "
            f"{self.career_path}"
        )
