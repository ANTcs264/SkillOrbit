

# Create your models here.
from django.db import models

from courses.models import Course


class Quiz(models.Model):

    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        related_name="quizzes"
    )

    title = models.CharField(
        max_length=200
    )

    total_marks = models.IntegerField(
        default=100
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )
class Question(models.Model):

    quiz = models.ForeignKey(
        Quiz,
        on_delete=models.CASCADE,
        related_name="questions"
    )

    question_text = models.TextField()

    option_a = models.CharField(
        max_length=255
    )

    option_b = models.CharField(
        max_length=255
    )

    option_c = models.CharField(
        max_length=255
    )

    option_d = models.CharField(
        max_length=255
    )

    correct_answer = models.CharField(
        max_length=1
    )

    def __str__(self):
        return self.question_text[:50]    
class QuizAttempt(models.Model):

    user = models.ForeignKey(
        "accounts.User",
        on_delete=models.CASCADE
    )

    quiz = models.ForeignKey(
        Quiz,
        on_delete=models.CASCADE
    )

    score = models.IntegerField(
        default=0
    )

    total_questions = models.IntegerField(
        default=0
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.user.username} - {self.quiz.title}"    

class UserAnswer(models.Model):

    attempt = models.ForeignKey(
        QuizAttempt,
        on_delete=models.CASCADE,
        related_name="answers"
    )

    question = models.ForeignKey(
        Question,
        on_delete=models.CASCADE
    )

    selected_answer = models.CharField(
        max_length=1
    )

    is_correct = models.BooleanField(
        default=False
    )

    def __str__(self):
        return (
            f"{self.attempt.user.username}"
            f" - {self.question.id}"
        )
    def __str__(self):
        return self.title
