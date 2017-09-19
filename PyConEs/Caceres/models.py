from django.db import models

TYPE_CHOICES = (
    ('Pub', 'Pub'),
    ('Coffee', 'Coffee'),
    ('Disco', 'Disco')
)


class Base(models.Model):
    """ Base class """
    name = models.CharField(verbose_name='Name', max_length=100)
    description = models.CharField(verbose_name='Description', max_length=100)
    address = models.CharField(verbose_name='Address', max_length=100)

    class Meta:
        abstract = True


class Event(Base):
    """ Event class"""
    date = models.DateField(verbose_name='Date')


class Kindergarten(Base):
    """ Kindergarten class """
    min_age = models.IntegerField(verbose_name='Minimum age')
    max_age = models.IntegerField(verbose_name='Maximum age')


class School(Base):
    """ School class """


class Shop(Base):
    """ Shop class """
    goods = models.CharField(verbose_name='Goods', max_length=100)
    openingTime = models.IntegerField(verbose_name='Opening time')
    closingTime = models.IntegerField(verbose_name='Closing time')


class Bar(Base):
    """ Bar class """
    type = models.CharField(verbose_name='Type', choices=TYPE_CHOICES,  max_length=30)
    openingTime = models.IntegerField(verbose_name='Opening time')
    closingTime = models.IntegerField(verbose_name='Closing time')


class Restaurant(Base):
    """ Restaurant class """
    qualification = models.IntegerField(verbose_name='Qualification')
    openingTime = models.IntegerField(verbose_name='Opening time')
    closingTime = models.IntegerField(verbose_name='Closing time')
