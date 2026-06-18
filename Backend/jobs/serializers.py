from rest_framework import serializers

from .models import JobRecommendation


class JobRecommendationSerializer(
    serializers.ModelSerializer
):

    class Meta:

        model = JobRecommendation

        fields = "__all__"