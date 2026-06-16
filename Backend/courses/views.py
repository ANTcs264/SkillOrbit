from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import Course
from .serializers import CourseSerializer


class CourseListCreateView(
    generics.ListCreateAPIView
):

    queryset = Course.objects.all()

    serializer_class = CourseSerializer

    permission_classes = [
        IsAuthenticated
    ]


class CourseDetailView(
    generics.RetrieveUpdateDestroyAPIView
):

    queryset = Course.objects.all()

    serializer_class = CourseSerializer

    permission_classes = [
        IsAuthenticated
    ]