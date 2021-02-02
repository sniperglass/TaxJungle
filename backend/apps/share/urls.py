from django.urls import path
from apps.share.views import ShareView

urlpatterns = [
    path('', ShareView.as_view(), name="share")
]
