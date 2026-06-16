from django.urls import path


from .views import (
    QuizListCreateView,
    QuizDetailView,
    QuestionListCreateView,
    QuestionDetailView,
    SubmitQuizView
)

urlpatterns = [

    path(
        "quizzes/",
        QuizListCreateView.as_view(),
        name="quizzes"
    ),

    path(
        "quizzes/<int:pk>/",
        QuizDetailView.as_view(),
        name="quiz-detail"
    ),

    path(
        "questions/",
        QuestionListCreateView.as_view(),
        name="questions"
    ),

    path(
        "questions/<int:pk>/",
        QuestionDetailView.as_view(),
        name="question-detail"
    ),
    path(
    "submit-quiz/",
    SubmitQuizView.as_view(),
    name="submit-quiz"
),

]