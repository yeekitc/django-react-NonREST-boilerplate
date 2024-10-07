# URLs for the chat app

from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_chat_response, name='get_chat_response'),
]
