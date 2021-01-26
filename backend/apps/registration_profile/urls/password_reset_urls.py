from django.urls import path
from apps.registration_profile.views.password_reset_views import PasswordResetView, PasswordResetValidationView

urlpatterns = [
    path('', PasswordResetView.as_view()),
    path('validate/', PasswordResetValidationView.as_view()),
]
