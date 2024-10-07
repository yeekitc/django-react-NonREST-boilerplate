from django.shortcuts import render
from django.http import HttpResponse


def get_chat_response(request):
    user_message = request.data.get('message')
    # Simulate LLM response (placeholder)
    response_message = f"<h1>LLM Response to: {user_message}</h1>"
    return HttpResponse(response_message)
