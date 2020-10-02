from django.db import models

# Create your models here.
class Song(models.Model):
    sample_title = models.CharField(max_length=100)
    sample_artist = models.CharField(max_length=100, default='')
    sample_address = models.CharField(max_length=100)
    sample_time_stamp = models.CharField(max_length=10)#might have to change model field
    sample_views = models.IntegerField(default=0)
    sample_likes = models.IntegerField(default=0)

    og_title = models.CharField(max_length=100)
    og_artist = models.CharField(max_length=100, default='')
    og_address = models.CharField(max_length=100)
    og_time_stamp = models.CharField(max_length=10)#might have to change model field
    og_views = models.IntegerField(default=0)
    og_likes = models.IntegerField(default=0)

    def __str__(self):
        return self.title
