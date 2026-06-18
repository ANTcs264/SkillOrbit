from django.urls import path

from .views import (
    JobRecommendationView
)

urlpatterns = [

    path(
        "job-recommendations/",
        JobRecommendationView.as_view()
    )

]