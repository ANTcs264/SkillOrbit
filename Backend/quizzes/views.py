from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import (
    Quiz,
    Question,
    QuizAttempt,
    UserAnswer
)

from .serializers import (
    QuizSerializer,
    QuestionSerializer,
    QuizSubmissionSerializer
)
class QuizListCreateView(
    generics.ListCreateAPIView
):

    queryset = Quiz.objects.all()

    serializer_class = QuizSerializer

    permission_classes = [
        IsAuthenticated
    ]


class QuizDetailView(
    generics.RetrieveUpdateDestroyAPIView
):

    queryset = Quiz.objects.all()

    serializer_class = QuizSerializer

    permission_classes = [
        IsAuthenticated
    ]


class QuestionListCreateView(
    generics.ListCreateAPIView
):

    queryset = Question.objects.all()

    serializer_class = QuestionSerializer

    permission_classes = [
        IsAuthenticated
    ]


class QuestionDetailView(
    generics.RetrieveUpdateDestroyAPIView
):

    queryset = Question.objects.all()

    serializer_class = QuestionSerializer

    permission_classes = [
        IsAuthenticated
    ]

class SubmitQuizView(APIView):

    permission_classes = [
        IsAuthenticated
    ]

    def post(self, request):

        serializer = QuizSubmissionSerializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        quiz_id = serializer.validated_data["quiz"]

        answers = serializer.validated_data["answers"]

        quiz = Quiz.objects.get(
            id=quiz_id
        )

        attempt = QuizAttempt.objects.create(
            user=request.user,
            quiz=quiz
        )

        score = 0

        for answer_data in answers:

            question = Question.objects.get(
                id=answer_data["question"]
            )

            selected = answer_data[
                "selected_answer"
            ]

            correct = (
                selected ==
                question.correct_answer
            )

            if correct:
                score += 1

            UserAnswer.objects.create(
                attempt=attempt,
                question=question,
                selected_answer=selected,
                is_correct=correct
            )

        attempt.score = score

        attempt.total_questions = len(
            answers
        )

        attempt.save()

        attempt.score = score

        attempt.total_questions = len(
            answers
        )

        attempt.save()

        percentage = (
            score / len(answers)
        ) * 100

        result = (
            "PASS"
            if percentage >= 50
            else "FAIL"
        )

        return Response({
            "score": score,
            "total_questions": len(answers),
            "percentage": percentage,
            "result": result
        })