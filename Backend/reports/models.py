from django.db import models

# Create your models here.
from django.db import models
from django.conf import settings


class CareerReport(models.Model):

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    career_path = models.CharField(
        max_length=100
    )

    placement_score = models.FloatField()

    resume_score = models.FloatField()

    report = models.TextField()

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return (
            f"{self.user.username}"
            f" Report"
        )