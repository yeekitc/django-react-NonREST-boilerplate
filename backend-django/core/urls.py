# core/urls.py
from django.urls import path
from .views import home_view, update_count_view

urlpatterns = [
    path('', home_view, name='home'),  # homepage serving
    path('update-count/', update_count_view, name='update-count'),
]