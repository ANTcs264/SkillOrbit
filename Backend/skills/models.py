

# Create your models here.
from django.db import models
from accounts.models import User


class Skill(models.Model):

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="skills"
    )

    skill = models.CharField(
        max_length=100
    )

    progress = models.IntegerField(
        default=0
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.user.username} - {self.skill}"