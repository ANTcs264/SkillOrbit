from django.urls import path

from .views import ResumeView
from .views import (
    ResumeView,
    ResumeBuilderView,
    ResumeAnalysisView
)

urlpatterns = [

    path(
        "resume/",
        ResumeView.as_view(),
        name="resume"
    ),
    path(
    "resume-builder/",
    ResumeBuilderView.as_view(),
    name="resume-builder"
    ),
    path(
    "resume-analysis/",
    ResumeAnalysisView.as_view()
    ),

]