from rest_framework import serializers
from .models import Song

class SongSerializer(serializers.ModelSerializer):

    class Meta:
        model = Song
        fields = ('id', 'song_title', 'song_artist', 'song_address', 'song_time_stamp', 'song_views', 'song_likes', 'sampled_title', 'sampled_artist', 'sampled_address', 'sampled_time_stamp', 'sampled_views', 'sampled_likes', )
