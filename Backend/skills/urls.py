from django.urls import path

from .views import (
    SkillListCreateView,
    SkillDetailView
)

urlpatterns = [

    path(
        "skills/",
        SkillListCreateView.as_view(),
        name="skills"
    ),

    path(
        "skills/<int:pk>/",
        SkillDetailView.as_view(),
        name="skill-detail"
    ),

]