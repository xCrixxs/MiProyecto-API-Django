# MiProyecto - API REST con Django

## Descripción

MiProyecto es un proyecto académico desarrollado con Django y Django REST Framework para administrar productos y categorías. Incluye una interfaz web para gestionar productos y una API REST que permite consultar, registrar, modificar y eliminar información.

## Tecnologías utilizadas

- Python
- Django
- Django REST Framework
- SQLite
- HTML y CSS
- Git y GitHub
- Docker

## Modelos principales

### Categoría

Permite clasificar y organizar los productos registrados en el sistema.

### Producto

Almacena información de cada producto, incluyendo nombre, descripción, precio, cantidad, categoría y usuario asociado.

## Instalación y ejecución

### 1. Clonar el repositorio


git clone https://github.com/xCrixxs/MiProyecto-API-Django.git


### 2. Entrar en la carpeta del proyecto


cd MiProyecto-API-Django


### 3. Crear un entorno virtual


python -m venv venv


### 4. Activar el entorno virtual en Windows


venv\Scripts\activate


### 5. Instalar las dependencias


pip install -r requirements.txt


### 6. Aplicar las migraciones


python manage.py migrate


### 7. Iniciar el servidor


python manage.py runserver


La aplicación estará disponible en:

http://127.0.0.1:8000/

## Endpoints de la API

Con el servidor en ejecución, se pueden consultar los siguientes endpoints:

- **Productos:** http://127.0.0.1:8000/api/productos/
- **Categorías:** http://127.0.0.1:8000/api/categorias/

## Operaciones CRUD

La API permite realizar las siguientes operaciones:

- **GET:** consultar productos y categorías.
- **POST:** registrar nuevos productos y categorías.
- **PUT:** reemplazar los datos de un registro.
- **PATCH:** modificar parcialmente un registro.
- **DELETE:** eliminar un registro.

Para consultar, modificar o eliminar un registro específico, se utiliza su identificador. Por ejemplo:

- /api/productos/1/
- /api/categorias/1/

El número debe sustituirse por el identificador del registro correspondiente.

## Interfaz web

El proyecto incluye las siguientes páginas:

- **Inicio:** página principal.
- **Productos:** formulario de registro y tabla de productos, con opciones para editar y eliminar.
- **Contacto:** página de contacto del proyecto.

## Ejecución con Docker

El proyecto incluye archivos de configuración para Docker. Si Docker Desktop está iniciado, se puede construir y ejecutar el servicio con:


docker compose up --build


La aplicación se configura para utilizar el puerto 8000.

## Autor

Cristian Fernando Muñoz Avalos

## Propósito académico

Proyecto realizado como práctica de desarrollo web con Django y creación de APIs REST mediante Django REST Framework.