from django.urls import path

from .views import (
    PlacementReadinessView
)

urlpatterns = [

    path(
        '',
        PlacementReadinessView.as_view()
    )
]