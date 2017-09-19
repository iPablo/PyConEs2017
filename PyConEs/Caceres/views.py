from rest_framework import generics

from .models import Event, Kindergarten, School, Shop, Bar, Restaurant
from .serializers import (EventSerializer, KindergartenSerializer, SchoolSerializer,
                          ShopSerializer, BarSerializer, RestaurantSerializer)


class EventList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class KindergartenList(generics.ListCreateAPIView):
    queryset = Kindergarten.objects.all()
    serializer_class = KindergartenSerializer


class KindergartenDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Kindergarten.objects.all()
    serializer_class = KindergartenSerializer


class SchoolList(generics.ListCreateAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer


class SchoolDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer


class ShopList(generics.ListCreateAPIView):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer


class ShopDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer


class BarList(generics.ListCreateAPIView):
    queryset = Bar.objects.all()
    serializer_class = BarSerializer


class BarDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bar.objects.all()
    serializer_class = BarSerializer


class RestaurantList(generics.ListCreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer


class RestaurantDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
