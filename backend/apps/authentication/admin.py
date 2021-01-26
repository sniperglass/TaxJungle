from django.contrib import admin
from apps.authentication.models import RegistrationProfile
from django.contrib.auth.models import Group

admin.site.unregister(Group)


@admin.register(RegistrationProfile)
class RegistrationProfileAdmin(admin.ModelAdmin):
    # fields shown when creating a new instance
    add_fieldsets = [
        (None, {
            'classes': ['wide'],
            'fields': ['user', 'code'],
        })
    ]

    # fields shown when looking at a list of instances
    list_display = ['user', 'code']
    list_filter = ['user']

    ordering = ['user']
