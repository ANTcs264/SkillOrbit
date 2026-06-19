
# Create your models here.
from django.db import models
from django.conf import settings


class PlacementReadiness(models.Model):

    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    placement_score = models.FloatField(
        default=0
    )

    resume_score = models.FloatField(
        default=0
    )

    skill_score = models.FloatField(
        default=0
    )

    job_readiness = models.FloatField(
        default=0
    )

    status = models.CharField(
        max_length=50,
        default="Not Ready"
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):

        return (
            f"{self.user.username} - "
            f"{self.placement_score}"
        )
