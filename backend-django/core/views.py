from django.shortcuts import render
from django.http import JsonResponse
import json

def home_view(request):
    return render(request, 'home.html')

def update_count_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        count = data.get('count', 0)
        print(f"Count received from React: {count}")  # Print count to console for now
        return JsonResponse({'message': f'Count updated to {count}'})
    return JsonResponse({'error': 'Invalid request method'}, status=400)