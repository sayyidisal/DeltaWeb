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


QUESTION_TYPE = (
    (1, 'Simple Question'),
    (2, 'Multiple Choice Question')
)


class Question(models.Model):
    """Model to store question

    """
    hash_id = models.CharField(max_length=200, help_text='hashed id for the question')
    title = models.CharField(null=True, blank=True, max_length=200, help_text='question title')
    difficulty = models.IntegerField(null=True, blank=True, help_text='difficulty for the question')
    source = models.CharField(null=True, blank=True, max_length=200, help_text='question source')
    rating = models.IntegerField(null=True, blank=True, help_text='rating for the question')
    type = models.SmallIntegerField(choices=QUESTION_TYPE, help_text='type of the question')
    # owner of the question: TO be added later
    is_public = models.BooleanField(default=True, help_text='whether this question is public or not')
    original_body = models.TextField(null=True, blank=True, help_text='original question body,'
                                                                      ' used for reference or non-parametric question')
    original_image = models.ImageField(null=True, blank=True, help_text='image in original question')
    original_answer = models.TextField(null=True, blank=True, help_text='original question answer, '
                                                                        'used for reference or non-parametric question')
    original_answer_image = models.ImageField(null=True, blank=True, help_text='image in original answer')
    body = models.TextField(null=True, blank=True, help_text='parametric question body and answer stored as json,'
                                                             ' null for non-parametric question')
    body_image = models.ImageField(null=True, blank=True, help_text='image in body')
    tags = models.ManyToManyField(Tag, null=True, blank=True, help_text='Tags that this question belong, 5 maximum')
    creation_time = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    # track changes of data (for debugging or querying)
    history = HistoricalRecords()

