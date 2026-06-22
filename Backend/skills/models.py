

# Create your models here.
from django.db import models
from accounts.models import User


class Skill(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    skill = models.CharField(
        max_length=100
    )

    progress = models.IntegerField()

    class Meta:
        unique_together = (
            "user",
            "skill"
        )

    def __str__(self):
        return f"{self.user.username} - {self.skill}"