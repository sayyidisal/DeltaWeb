# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Teacher',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('institution', models.CharField(help_text=b'institution where teacher works', max_length=200, null=True, blank=True)),
                ('teaching', models.CharField(help_text=b'courses that teacher teaches', max_length=200, null=True, blank=True)),
                ('is_certified', models.BooleanField(default=False, help_text=b'whether this teacher is certified or not')),
                ('profile_image', models.ImageField(help_text=b'personal profile image', null=True, upload_to=b'', blank=True)),
                ('reputation', models.IntegerField(default=0, help_text=b'reputation that teacher has')),
                ('auth_user', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
