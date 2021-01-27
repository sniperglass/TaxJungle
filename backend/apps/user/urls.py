from django.urls import path
from apps.user.views import MeView, UserListView, GetSingleUser

urlpatterns = [
    path('me/', MeView.as_view(), name="user_profile"),
    path('list/', UserListView.as_view(), name="display_users"),
    path('<int:user_id>/', GetSingleUser.as_view(), name='specific_user')
]
