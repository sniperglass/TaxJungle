# Generated by Django 3.1.4 on 2021-01-29 14:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('article_category', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='articlecategory',
            name='article_category',
        ),
    ]