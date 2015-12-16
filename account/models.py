from django.db import models
from django.contrib.auth.models import User
from simple_history.models import HistoricalRecords

# Create your models here.


class Teacher(models.Model):
    """Teacher model, used to store teacher profile

    It has a one to one relationship to django default User model
    """
    auth_user = models.OneToOneField(User)
    institution = models.CharField(null=True, blank=True, max_length=200, help_text='institution where teacher works')
    teaching = models.CharField(null=True, blank=True, max_length=200, help_text='courses that teacher teaches')
    is_certified = models.BooleanField(default=False, help_text='whether this teacher is certified or not')
    profile_image = models.ImageField(null=True, blank=True, help_text='personal profile image')
    reputation = models.IntegerField(default=0, help_text='reputation that teacher has')
    # track changes of data (for debugging or querying)
    history = HistoricalRecords()

