
# Create your models here.

from django.db import models
from django.conf import settings


class JobRecommendation(models.Model):

    CAREER_CHOICES = [
        ("AI/ML Engineer", "AI/ML Engineer"),
        ("Backend Developer", "Backend Developer"),
        ("Frontend Developer", "Frontend Developer"),
        ("Full Stack Developer", "Full Stack Developer"),
        ("Data Scientist", "Data Scientist"),
    ]

    DEMAND_CHOICES = [
        ("Low", "Low"),
        ("Medium", "Medium"),
        ("High", "High"),
        ("Very High", "Very High"),
    ]

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="job_recommendations"
    )

    job_title = models.CharField(
        max_length=150
    )

    career_path = models.CharField(
        max_length=100,
        choices=CAREER_CHOICES
    )

    readiness = models.FloatField(
        default=0
    )

    experience_level = models.CharField(
        max_length=50,
        default="Fresher"
    )

    salary_range = models.CharField(
        max_length=100,
        blank=True
    )

    demand_level = models.CharField(
        max_length=20,
        choices=DEMAND_CHOICES,
        default="Medium"
    )

    missing_skills = models.JSONField(
        default=list
    )

    recommended_courses = models.JSONField(
        default=list
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return (
            f"{self.user.username} - "
            f"{self.job_title}"
        )