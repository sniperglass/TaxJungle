from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from apps.authentication.views.token_views import TokenObtainView

urlpatterns = [
    path('', TokenObtainView.as_view()),
    path('refresh/', jwt_views.TokenRefreshView.as_view()),
    path('verify/', jwt_views.TokenVerifyView.as_view()),
]
