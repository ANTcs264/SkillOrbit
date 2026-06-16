from django.urls import path

from .views import (
    EnrollmentListCreateView,
    EnrollmentDetailView
)

urlpatterns = [

    path(
        "enrollments/",
        EnrollmentListCreateView.as_view(),
        name="enrollments"
    ),

    path(
        "enrollments/<int:pk>/",
        EnrollmentDetailView.as_view(),
        name="enrollment-detail"
    ),

]