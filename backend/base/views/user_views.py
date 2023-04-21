from django.shortcuts import render

from django.contrib.auth.models import User

from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from setuptools import PEP420PackageFinder


from base.serializers import ProductsSerializers, UserSerializers,UserSerializerWithToken

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.hashers import make_password
from rest_framework import status

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
   def validate(self, attrs):
        data = super().validate(attrs)

        serializer= UserSerializerWithToken(self.user).data

        for k,v in serializer.items():
            data[k]=v


        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class=MyTokenObtainPairSerializer

# @api_view(['GET'])
# def getRoutes(request):
#     routes=[
#         '/api/products',
#          '/api/products/create',
#           '/api/products/upload',

#            '/api/products/<id>/reviews',
#            '/api/products/top',
#             '/api/products/<id>',
#              '/api/products/delete/<id>',
#               '/api/products/update/<id>',
#     ]
#     return Response(routes)


@api_view(['POST'])
def registerUser(request):
    data=request.data

    try:
        user=User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])

        )

        serializer=UserSerializerWithToken(user,many=False)
        return Response(serializer.data)
    
    except:
        message={'detail':'User with this email already exist.'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user=request.user
    
    serializer=UserSerializers(user,many=False)

    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUsers(request):
    users= User.objects.all()
    serializer=UserSerializers(users,many=True)

    return Response(serializer.data)

