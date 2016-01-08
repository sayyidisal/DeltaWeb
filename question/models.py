from django.db import models
from django.contrib.auth.models import User
from simple_history.models import HistoricalRecords

# Create your models here.

class Tag(models.Model):
    """Tag model, used to store tag

    """
    title = models.CharField(max_length=200, help_text='tag title')
    abstract = models.TextField(null=True, blank=True, max_length=512, help_text='abstract for tag')
    description = models.TextField(null=True, blank=True, help_text='description for tag')
    usage_num = models.IntegerField(default=0, help_text='number of times this tag has been used')
    is_master = models.BooleanField(default=True, help_text='whether this is a master tag (standard)')
    synonym = models.ForeignKey('Tag', null=True, help_text='its master tag if it is not a master')
    creator = models.ForeignKey(User, null=True)
    creation_time = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    # track changes of data (for debugging or querying)
    history = HistoricalRecords()


