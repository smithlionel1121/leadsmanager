from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# Lead Viewset
"""Allows creation of full CRUD api,
without requiring explict methods for functionality"""

class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permissision_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerializer