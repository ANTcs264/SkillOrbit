from django.urls import path

from .views import CareerRoadmapView

urlpatterns = [

    path(
        "",
        CareerRoadmapView.as_view()
    ),
]