from django.shortcuts import render
from rest_framework import generics
from .models import User

# Create your views here.
from .serializers import RegisterSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


class TestView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        return Response({
            "message": "JWT Working",
            "user": request.user.username
        })
    
    #forpermission testing
from rest_framework.views import APIView
from rest_framework.response import Response
from .permissions import (
    IsStudent,
    IsInstructor,
    IsAdmin
)   
class StudentDashboard(APIView):

    permission_classes = [IsStudent]

    def get(self, request):

        return Response({
            "message": "Welcome Student"
        }) 
class InstructorDashboard(APIView):

    permission_classes = [IsInstructor]

    def get(self, request):

        return Response({
            "message": "Welcome Instructor"
        })  
class AdminDashboard(APIView):

    permission_classes = [IsAdmin]

    def get(self, request):

        return Response({
            "message": "Welcome Admin"
        })      