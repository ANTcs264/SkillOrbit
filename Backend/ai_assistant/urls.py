from django.urls import path
from .views import AICareerCopilotView

urlpatterns = [
    path(
        "ai-copilot/",
        AICareerCopilotView.as_view(),
        name="ai-copilot"
    ),
]