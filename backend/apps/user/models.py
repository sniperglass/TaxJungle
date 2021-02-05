from django.db import models
from django.contrib.auth.models import AbstractUser


# file will be uploaded to MEDIA_ROOT/username/<filename>
def user_directory_path(instance, filename):
    return f'{instance.username}/{filename}'


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=80)
    last_name = models.CharField(max_length=80)
    location = models.CharField(max_length=80)
    about = models.TextField(max_length=300, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    profile_picture = models.ImageField(upload_to=user_directory_path, blank=True, null=True)


def __str__(self):
    return self.username
