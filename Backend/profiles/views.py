from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import Profile
from .serializers import ProfileSerializer


class ProfileView(generics.RetrieveUpdateAPIView):

    serializer_class = ProfileSerializer

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request, *args, **kwargs):

        print("========== PROFILE ==========")
        print("USER =", request.user)
        print("AUTH =", request.auth)
        print(
            "HEADER =",
            request.META.get(
                "HTTP_AUTHORIZATION"
            )
        )

        return self.retrieve(
            request,
            *args,
            **kwargs
        )

    def get_object(self):
        return self.request.user.profile