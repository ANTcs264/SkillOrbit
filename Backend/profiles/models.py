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

    branch = models.CharField(
        max_length=100,
        blank=True
    )
    current_year = models.CharField(
    max_length=50,
    null=True,
    blank=True
)
    
    graduation_year = models.IntegerField(
        null=True,
        blank=True
    )
    career_goal = models.CharField(
        max_length=100,
        blank=True
    )
   

    def __str__(self):
     return f"{self.user.username} Profile"