# Angular, Ionic y Django: amigos con derecho a roce

Proyecto Django que usa Django REST framework para la creacion de una API REST para el taller impartido en la PyConEs 2017.

## Prerrequisitos
- Python3
```sh
 sudo apt-get install python3.5
```
 - Git (if you are going to clone this project):
```sh
 sudo apt install git
```
  - Pip:
```sh
sudo apt install python-pip
```
 - Virtualenv (Si no quieres instalar los paquetes en tu sistema):
```sh
sudo pip install virtualenv
virtualenv -p python3 venv
source venv/bin/activate
```
  - [Django](https://www.djangoproject.com/)
```sh
pip install django==1.11.5
```
 - [Django REST Framework](http://www.django-rest-framework.org/)
```sh
pip install djangorestframework==3.6.4
```

## Como usarlo

A la altura del fichero manage.py:
<pre>
# Ejecutamos las migraciones 
python3 manage.py migrate

# Para insertar datos de prueba en la base de datos
python3 manage.py loaddata Caceres/fixtures/initial_data.json

# Arrancamos el servidor
python3 manage.py runserver

</pre>

Tu aplicación estará arrancada en [localhost](http://localhost:8000)
