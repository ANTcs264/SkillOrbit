from django.urls import path
from .views import RegisterView
from .views import (
    RegisterView,
    StudentDashboard,
    InstructorDashboard,
    AdminDashboard,
)

urlpatterns = [

    path(
        "register/",
        RegisterView.as_view(),
        name="register"
    ),
    path(
        "student-dashboard/",
        StudentDashboard.as_view(),
        name="student-dashboard"
    ),
    path(
        "instructor-dashboard/",
        InstructorDashboard.as_view(),
        name="instructor-dashboard"
    ),
    path(
        "admin-dashboard/",
        AdminDashboard.as_view(),
        name="admin-dashboard"
    ),
]
