from rest_framework import serializers

from .models import Base, Event, Kindergarten, School, Shop, Bar, Restaurant


class BaseSerializer(serializers.ModelSerializer):
    """ Base serializer"""
    class Meta:
        model = Base
        fields = ('pk', 'name', 'description', 'address')


class EventSerializer(BaseSerializer):
    """ Event serializer"""
    class Meta:
        model = Event
        fields = ('pk', 'date', 'name', 'description', 'address')


class KindergartenSerializer(BaseSerializer):
    """ Kindergarten serializer"""
    class Meta:
        model = Kindergarten
        fields = ('pk', 'name', 'description', 'address', 'min_age', 'max_age')


class SchoolSerializer(BaseSerializer):
    """ School serializer"""
    class Meta:
        model = School
        fields = ('pk', 'name', 'description', 'address')


class ShopSerializer(BaseSerializer):
    """ Shop serializer"""
    class Meta:
        model = Shop
        fields = ('pk', 'name', 'description', 'address', 'goods', 'openingTime', 'closingTime')


class BarSerializer(BaseSerializer):
    """ Bar serializer """
    class Meta:
        model = Bar
        fields = ('pk', 'name', 'description', 'address', 'type', 'openingTime', 'closingTime')


class RestaurantSerializer(BaseSerializer):
    """ Bar serializer """
    class Meta:
        model = Restaurant
        fields = ('pk', 'name', 'description', 'address', 'qualification', 'openingTime', 'closingTime')
