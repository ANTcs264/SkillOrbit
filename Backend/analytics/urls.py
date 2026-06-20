from django.urls import path

from .views import (
    DashboardView,
    ProgressHistoryView
)

urlpatterns = [

    path(
        "dashboard/",
        DashboardView.as_view(),
        name="dashboard"
    ),

    path(
        "progress-history/",
        ProgressHistoryView.as_view(),
        name="progress-history"
    ),

]