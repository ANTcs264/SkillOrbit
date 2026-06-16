

# Create your models here.
from django.db import models

from accounts.models import User
from courses.models import Course


class Enrollment(models.Model):

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )

    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE
    )

    enrolled_at = models.DateTimeField(
        auto_now_add=True
    )

    class Meta:
        unique_together = (
            "user",
            "course"
        )

    def __str__(self):
        return f"{self.user.username} - {self.course.title}"
