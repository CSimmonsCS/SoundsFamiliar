from django.db import models

# Create your models here.
class Song(models.Model):
    song_title = models.CharField(max_length=100)
    song_artist = models.CharField(max_length=100, default='')
    song_videoId = models.CharField(max_length=100)
    song_time_stamp = models.CharField(max_length=10)#might have to change model field
    song_views = models.IntegerField(default=0)
    song_likes = models.IntegerField(default=0)

    sampled_title = models.CharField(max_length=100)
    sampled_artist = models.CharField(max_length=100, default='')
    sampled_videoId = models.CharField(max_length=100)
    sampled_time_stamp = models.CharField(max_length=10)#might have to change model field
    sampled_views = models.IntegerField(default=0)
    sampled_likes = models.IntegerField(default=0)

    def __str__(self):
        return self.song_title
