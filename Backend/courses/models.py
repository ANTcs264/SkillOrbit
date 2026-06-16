

# Create your models here.
from django.db import models


class Course(models.Model):

    LEVEL_CHOICES = (
        ("Beginner", "Beginner"),
        ("Intermediate", "Intermediate"),
        ("Advanced", "Advanced"),
    )

    title = models.CharField(
        max_length=200
    )

    description = models.TextField()

    level = models.CharField(
        max_length=20,
        choices=LEVEL_CHOICES
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.title