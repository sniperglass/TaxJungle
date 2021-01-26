from django.db import models
from django.conf import settings
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.core.mail import send_mail
from django.core.validators import RegexValidator
from random import randint

CODE_LENGTH = 5
CODE_VALIDATOR = RegexValidator(regex=f'^[0-9]{{{CODE_LENGTH}}}$',
                                message='Code must contain exactly 5 numbers from 0-9.')


def code_generator(length=CODE_LENGTH):
    return "".join([str(randint(0, 9)) for i in range(length)])


class RegistrationProfile(models.Model):
    user = models.OneToOneField(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE,
                                related_name="registration_profile",
                                primary_key=True)
    code = models.CharField(default=code_generator, max_length=CODE_LENGTH,
                            validators=[CODE_VALIDATOR])

    def update_code(self):
        setattr(self, 'code', code_generator())
        self.save()

    def __str__(self):
        return f'Registration profile {self.user}'


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_registration_profile(sender, instance, **kwargs):
    profile, created = RegistrationProfile.objects.get_or_create(user=instance)
    if created:
        profile.save()
        send_mail(
            'Thank you for registering!',
            f'Here is your validation code: {profile.code}',
            None,
            [profile.user.email],
            fail_silently=False,
        )
