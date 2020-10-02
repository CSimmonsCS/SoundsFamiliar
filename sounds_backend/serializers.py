from rest_framework import serializers
from .models import Song

class SongSerializer(serializers.ModelSerializer):

    class Meta:
        model = Song
        fields = ('sample_title', 'sample_artist', 'sample_address', 'sample_time_stamp', 'sample_views', 'sample_likes', 'og_title', 'og_artist', 'og_address', 'og_time_stamp', 'og_views', 'og_likes', )
