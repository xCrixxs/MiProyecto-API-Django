# MiProyecto - API REST con Django

## Descripción

Este proyecto forma parte de una actividad académica de desarrollo de software. Consiste en una API REST desarrollada con Django y Django REST Framework para administrar productos y categorías.

La API permite consultar, registrar, modificar y eliminar registros de productos y categorías.

## Tecnologías utilizadas

- Python
- Django
- Django REST Framework
- SQLite (si es la base de datos configurada en el proyecto)
- Git y GitHub

## Modelos principales

### Categoría

Permite organizar los productos por categorías.

### Producto

Administra información de los productos, como nombre, descripción, precio, cantidad y categoría asociada.

## Instalación y ejecución

1. Clonar el repositorio:

   ```bash
   git clone URL_DE_TU_REPOSITORIO
   ```

2. Entrar a la carpeta del proyecto:

   ```bash
   cd MiProyecto-API-Django
   ```

3. Crear un entorno virtual:

   ```bash
   python -m venv venv
   ```

4. Activar el entorno virtual en Windows:

   ```bat
   venv\Scripts\activate
   ```

5. Instalar las dependencias:

   ```bash
   pip install -r requirements.txt
   ```

6. Aplicar las migraciones:

   ```bash
   python manage.py migrate
   ```

7. Iniciar el servidor:

   ```bash
   python manage.py runserver
   ```

## Endpoints de la API

Con el servidor activo, se pueden consultar los siguientes endpoints:

- Productos: `http://127.0.0.1:8000/api/productos/`
- Categorías: `http://127.0.0.1:8000/api/categorias/`

## Operaciones disponibles

La API permite realizar operaciones CRUD:

- **GET:** consultar registros.
- **POST:** crear registros.
- **PUT/PATCH:** modificar registros.
- **DELETE:** eliminar registros.

Para modificar o eliminar un registro específico, se debe utilizar la ruta de detalle correspondiente, por ejemplo `/api/productos/1/` o `/api/categorias/1/`, sustituyendo el número por el identificador del registro.

## Autor

Cristian Fernando Muñoz Avalos

## Propósito académico

Proyecto realizado como práctica de desarrollo de APIs REST con Django REST Framework.