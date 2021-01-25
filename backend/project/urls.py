"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from django.conf.urls.static import static
from django.conf import settings
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

# Documentation configuration
schema_view = get_schema_view(
    openapi.Info(
        title="Taxjungle API",
        default_version='v1',
        description="Taxjungle Final Project",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="propulsion.academy@gmail.com"),
        license=openapi.License(name="BSD License"),
    ),
    url='https://taxjungle.propulsion-learn.ch/backend/api/',
    public=True,  # Set to False to restrict access to protected endpoints
    permission_classes=(permissions.AllowAny,)  # If removed, default: IsAuthenticated
)

api_patterns = [
    # Documentation
    path('docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]

urlpatterns = [
    path('backend/admin/', admin.site.urls),
    path('backend/api/', include(api_patterns)),
]

# Serving static files during development
# https://docs.djangoproject.com/en/3.1/howto/static-files/
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
