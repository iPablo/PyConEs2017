from rest_framework import generics

from .models import Event, Kindergarten, School, Shop, Bar, Restaurant
from .serializers import (EventSerializer, KindergartenSerializer, SchoolSerializer,
                          ShopSerializer, BarSerializer, RestaurantSerializer, EventListSerializer,
                          RestaurantListSerializer, KindergartenListSerializer, SchoolListSerializer,
                          ShopListSerializer, BarListSerializer)


class EventList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventListSerializer


class EventDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class KindergartenList(generics.ListCreateAPIView):
    queryset = Kindergarten.objects.all()
    serializer_class = KindergartenListSerializer


class KindergartenDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Kindergarten.objects.all()
    serializer_class = KindergartenSerializer


class SchoolList(generics.ListCreateAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolListSerializer


class SchoolDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer


class ShopList(generics.ListCreateAPIView):
    queryset = Shop.objects.all()
    serializer_class = ShopListSerializer


class ShopDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer


class BarList(generics.ListCreateAPIView):
    queryset = Bar.objects.all()
    serializer_class = BarListSerializer


class BarDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bar.objects.all()
    serializer_class = BarSerializer


class RestaurantList(generics.ListCreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantListSerializer


class RestaurantDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
