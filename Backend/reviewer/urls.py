from django.urls import path

from .views import (
    ResumeReviewView,
    ReviewHistoryView
)

urlpatterns = [

    path(
        "resume-review/",
        ResumeReviewView.as_view(),
        name="resume-review"
    ),

    path(
        "review-history/",
        ReviewHistoryView.as_view(),
        name="review-history"
    ),
]