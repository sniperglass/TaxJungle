# Generated by Django 3.1.4 on 2021-02-11 14:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0010_auto_20210211_1258'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='content',
            field=models.TextField(),
        ),
    ]
