# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_historicalteacher'),
    ]

    operations = [
        migrations.AlterField(
            model_name='teacher',
            name='auth_user',
            field=models.OneToOneField(to=settings.AUTH_USER_MODEL),
        ),
    ]
