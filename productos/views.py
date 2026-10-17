
from django.shortcuts import render, redirect, get_object_or_404
from .models import Producto
from .forms import ProductoForm
from django.contrib.auth.models import User


def inicio(request):
    return render(request, 'productos/index.html')


def productos(request):
    lista_productos = Producto.objects.all()

    if request.method == 'POST':
        formulario = ProductoForm(request.POST)

        if formulario.is_valid():
            producto = formulario.save(commit=False)
            usuario = User.objects.first()

            if usuario:
                producto.usuario = usuario
                producto.save()
                return redirect('productos')
    else:
        formulario = ProductoForm()

    return render(request, 'productos/productos.html', {
        'formulario': formulario,
        'lista_productos': lista_productos
    })


def editar_producto(request, pk):
    producto = get_object_or_404(Producto, pk=pk)

    if request.method == 'POST':
        formulario = ProductoForm(request.POST, instance=producto)

        if formulario.is_valid():
            formulario.save()
            return redirect('productos')
    else:
        formulario = ProductoForm(instance=producto)

    return render(request, 'productos/editar_producto.html', {
        'formulario': formulario,
        'producto': producto
    })


def eliminar_producto(request, pk):
    producto = get_object_or_404(Producto, pk=pk)

    if request.method == 'POST':
        producto.delete()
        return redirect('productos')

    return render(request, 'productos/eliminar_producto.html', {
        'producto': producto
    })


def contacto(request):
    return render(request, 'productos/contacto.html')

from rest_framework import viewsets
from .models import Categoria, Producto
from .serializers import CategoriaSerializer, ProductoSerializer


class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer


class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer