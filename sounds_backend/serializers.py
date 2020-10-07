from rest_framework import serializers
from .models import Song

class SongSerializer(serializers.ModelSerializer):

    class Meta:
        model = Song
        fields = ('id', 'song_title', 'song_artist', 'song_videoId', 'song_time_stamp', 'song_views', 'song_likes', 'sampled_title', 'sampled_artist', 'sampled_videoId', 'sampled_time_stamp', 'sampled_views', 'sampled_likes', )
