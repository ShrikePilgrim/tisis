from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import ContactMessage
import json

@csrf_exempt
def submit_contact(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        ContactMessage.objects.create(
            name=data['name'],
            email=data['email'],
            message=data['message']
        )
        return JsonResponse({'status': 'success'}, status=201)
    return JsonResponse({'error': 'Invalid method'}, status=405)