from django.shortcuts import render



from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from setuptools import PEP420PackageFinder

from base.products import products
from base.models import Product
from base.serializers import ProductsSerializers




from rest_framework import status

@api_view(['GET'])
def getProducts(request):
    products= Product.objects.all()
    serializer=ProductsSerializers(products,many=True)

    return Response(serializer.data)




@api_view(['GET'])
def getProduct(request,pk):
    product=Product.objects.get(_id=pk)
    serializer= ProductsSerializers(product,many=False)
    

    return Response(serializer.data)
