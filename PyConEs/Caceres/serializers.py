from rest_framework import serializers

from .models import Base, Event, Kindergarten, School, Shop, Bar, Restaurant


class BaseListSerializer(serializers.ModelSerializer):
    """ Base serializer"""
    class Meta:
        model = Base
        fields = ('pk', 'name', 'address')


class BaseSerializer(serializers.ModelSerializer):
    """ Base serializer"""
    class Meta:
        model = Base
        fields = ('pk', 'name', 'description', 'address')


class EventListSerializer(BaseListSerializer):
    """ Event serializer"""
    class Meta(BaseListSerializer.Meta):
        model = Event


class EventSerializer(BaseSerializer):
    """ Event serializer"""
    class Meta:
        model = Event
        fields = ('pk', 'date', 'name', 'description', 'address')


class KindergartenListSerializer(BaseListSerializer):
    """ Event serializer"""
    class Meta(BaseListSerializer.Meta):
        model = Kindergarten


class KindergartenSerializer(BaseSerializer):
    """ Kindergarten serializer"""
    class Meta:
        model = Kindergarten
        fields = ('pk', 'name', 'description', 'address', 'min_age', 'max_age')


class SchoolListSerializer(BaseListSerializer):
    """ Event serializer"""
    class Meta(BaseListSerializer.Meta):
        model = School


class SchoolSerializer(BaseSerializer):
    """ School serializer"""
    class Meta:
        model = School
        fields = ('pk', 'name', 'description', 'address')


class ShopListSerializer(BaseListSerializer):
    """ Event serializer"""
    class Meta(BaseListSerializer.Meta):
        model = Shop


class ShopSerializer(BaseSerializer):
    """ Shop serializer"""
    class Meta:
        model = Shop
        fields = ('pk', 'name', 'description', 'address', 'goods', 'openingTime', 'closingTime')


class BarListSerializer(BaseListSerializer):
    """ Event serializer"""
    class Meta(BaseListSerializer.Meta):
        model = Bar


class BarSerializer(BaseSerializer):
    """ Bar serializer """
    class Meta:
        model = Bar
        fields = ('pk', 'name', 'description', 'address', 'type', 'openingTime', 'closingTime')


class RestaurantListSerializer(BaseListSerializer):
    """ Event serializer"""
    class Meta(BaseListSerializer.Meta):
        model = Restaurant


class RestaurantSerializer(BaseSerializer):
    """ Bar serializer """
    class Meta:
        model = Restaurant
        fields = ('pk', 'name', 'description', 'address', 'qualification', 'openingTime', 'closingTime')
