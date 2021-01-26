from django.urls import path
from apps.authentication.views.password_reset_views import PasswordResetView, PasswordResetValidationView

urlpatterns = [
    path('', PasswordResetView.as_view()),
    path('validation/', PasswordResetValidationView.as_view()),
]
