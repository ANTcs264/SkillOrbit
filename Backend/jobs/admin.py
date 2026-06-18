from django.contrib import admin

# Register your models here.
from django.contrib import admin

from .models import JobRecommendation


admin.site.register(
    JobRecommendation
)
