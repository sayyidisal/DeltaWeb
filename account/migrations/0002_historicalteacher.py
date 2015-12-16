# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.db.models.deletion
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='HistoricalTeacher',
            fields=[
                ('id', models.IntegerField(verbose_name='ID', db_index=True, auto_created=True, blank=True)),
                ('institution', models.CharField(help_text=b'institution where teacher works', max_length=200, null=True, blank=True)),
                ('teaching', models.CharField(help_text=b'courses that teacher teaches', max_length=200, null=True, blank=True)),
                ('is_certified', models.BooleanField(default=False, help_text=b'whether this teacher is certified or not')),
                ('profile_image', models.TextField(help_text=b'personal profile image', max_length=100, null=True, blank=True)),
                ('reputation', models.IntegerField(default=0, help_text=b'reputation that teacher has')),
                ('history_id', models.AutoField(serialize=False, primary_key=True)),
                ('history_date', models.DateTimeField()),
                ('history_type', models.CharField(max_length=1, choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')])),
                ('auth_user', models.ForeignKey(related_name='+', on_delete=django.db.models.deletion.DO_NOTHING, db_constraint=False, blank=True, to=settings.AUTH_USER_MODEL, null=True)),
                ('history_user', models.ForeignKey(related_name='+', on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL, null=True)),
            ],
            options={
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': 'history_date',
                'verbose_name': 'historical teacher',
            },
        ),
    ]
