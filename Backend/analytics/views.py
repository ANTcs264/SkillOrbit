from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from skills.models import Skill
from enrollments.models import Enrollment
from quizzes.models import QuizAttempt


class DashboardView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        skills_count = Skill.objects.filter(
            user=request.user
        ).count()

        courses_enrolled = Enrollment.objects.filter(
            user=request.user
        ).count()

        attempts = QuizAttempt.objects.filter(
            user=request.user
        )

        quizzes_attempted = attempts.count()

        average_score = 0
        highest_score = 0
        lowest_score = 0
        pass_rate = 0

        if quizzes_attempted > 0:
        
            scores = [
                attempt.score
                for attempt in attempts
            ]

            average_score = (
                sum(scores)
                / quizzes_attempted
            )

            highest_score = max(scores)

            lowest_score = min(scores)

            passed_attempts = attempts.filter(
                score__gte=1
            ).count()

            pass_rate = (
                passed_attempts
                / quizzes_attempted
            ) * 100

       

        return Response({
             "skills_count": skills_count,
             "courses_enrolled": courses_enrolled,
             "quizzes_attempted": quizzes_attempted,
             "average_score": average_score,
             "highest_score": highest_score,
             "lowest_score": lowest_score,
             "pass_rate": pass_rate
})