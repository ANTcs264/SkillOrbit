from django.urls import path

from .views import (
    CourseListCreateView,
    CourseDetailView
)

urlpatterns = [

    path(
        "courses/",
        CourseListCreateView.as_view(),
        name="courses"
    ),

    path(
        "courses/<int:pk>/",
        CourseDetailView.as_view(),
        name="course-detail"
    ),

]