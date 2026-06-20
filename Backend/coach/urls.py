from django.urls import path

from .views import (
    CareerCoachView
)

urlpatterns = [

    path(
        "career-coach/",
        CareerCoachView.as_view(),
        name="career-coach"
    ),

]