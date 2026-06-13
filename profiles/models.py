from django.db import models
from accounts.models import User

class Profile(models.Model):

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE
    )

    bio = models.TextField(blank=True)

    github = models.URLField(blank=True)

    linkedin = models.URLField(blank=True)

    college = models.CharField(
        max_length=200,
        blank=True
    )

    graduation_year = models.IntegerField(
        null=True,
        blank=True
    )