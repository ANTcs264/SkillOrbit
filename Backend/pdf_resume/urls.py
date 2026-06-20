from django.urls import path

from .views import (
    ResumePDFView
)

urlpatterns = [

    path(
        "resume-pdf/",
        ResumePDFView.as_view(),
        name="resume-pdf"
    ),

]