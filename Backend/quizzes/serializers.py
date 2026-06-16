from rest_framework import serializers

from .models import (
    Quiz,
    Question,
    QuizAttempt,
    UserAnswer
)


class QuizSerializer(serializers.ModelSerializer):

    class Meta:
        model = Quiz
        fields = "__all__"


class QuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Question
        fields = "__all__"


class QuizAttemptSerializer(serializers.ModelSerializer):

    class Meta:
        model = QuizAttempt
        fields = "__all__"


class UserAnswerSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserAnswer
        fields = "__all__"
class AnswerSubmissionSerializer(
    serializers.Serializer
):

    question = serializers.IntegerField()

    selected_answer = serializers.CharField(
        max_length=1
    )


class QuizSubmissionSerializer(
    serializers.Serializer
):

    quiz = serializers.IntegerField()

    answers = AnswerSubmissionSerializer(
        many=True
    )        