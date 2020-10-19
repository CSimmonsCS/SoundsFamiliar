from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User
from .models import Song

class SongSerializer(serializers.ModelSerializer):

    class Meta:
        model = Song
        fields = ('id', 'song_title', 'song_artist', 'song_videoId', 'song_time_stamp', 'song_views', 'song_likes', 'sampled_title', 'sampled_artist', 'sampled_videoId', 'sampled_time_stamp', 'sampled_views', 'sampled_likes', )

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required = True,
            validators = [UniqueValidator(queryset=User.objects.all())]
    )
    username = serializers.CharField(
            validators = [UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField(min_length=8, write_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'],
             validated_data['password'])
        return user

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
