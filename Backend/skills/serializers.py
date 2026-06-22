from rest_framework import serializers
from .models import Skill

class SkillSerializer(serializers.ModelSerializer):

    class Meta:
        model = Skill
        fields = "__all__"

    def validate(self, data):

        user = self.context["request"].user
        skill = data["skill"]

        queryset = Skill.objects.filter(
            user=user,
            skill__iexact=skill
        )

        if self.instance:
            queryset = queryset.exclude(
                pk=self.instance.pk
            )

        if queryset.exists():
            raise serializers.ValidationError(
                "Skill already exists."
            )

        return data