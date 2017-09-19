from django.conf.urls import url

from rest_framework.urlpatterns import format_suffix_patterns

from . import views


urlpatterns = [
    url(r'^event/$', views.EventList.as_view()),
    url(r'^event/(?P<pk>[0-9]+)/$', views.EventDetail.as_view()),
    url(r'^kindergarten/$', views.KindergartenList.as_view()),
    url(r'^kindergarten/(?P<pk>[0-9]+)/$', views.KindergartenDetail.as_view()),
    url(r'^school/$', views.SchoolList.as_view()),
    url(r'^school/(?P<pk>[0-9]+)/$', views.SchoolDetail.as_view()),
    url(r'^shop/$', views.ShopList.as_view()),
    url(r'^shop/(?P<pk>[0-9]+)/$', views.ShopDetail.as_view()),
    url(r'^bar/$', views.BarList.as_view()),
    url(r'^bar/(?P<pk>[0-9]+)/$', views.BarDetail.as_view()),
    url(r'^restaurant/$', views.RestaurantList.as_view()),
    url(r'^restaurant/(?P<pk>[0-9]+)/$', views.RestaurantDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
