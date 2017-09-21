# Angular, Ionic y Django: Amigos con derecho a roce

## 1. Instalando las dependencias
 
### 1.1 Instalando Nodejs

Necesitamos Node versión 6.x o superior

##### En linux

Ejecutar la siguiente curl para añadir el PPA necesario

```bash
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
```

Instalar nodejs

```bash
sudo apt-get install -y nodejs
```

##### En OSX

Usando Homebrew

```bash
brew install node
```

o simplemente [descarga](http://nodejs.org/#download) el instalador.

##### En Windows

[Descarga](http://nodejs.org/#download)  el instalador.

##### Otros sistemas operativos y más instrucciones

Sigue las instrucciones de la web de [nodejs.org](https://nodejs.org/es/download/package-manager/).

### 1.2 Instalando ionic

```bash
sudo npm i -g ionic cordova
```

Esto instalará los CLI tanto Ionic como Cordova globalmente. Comprueba que todo ha funcionado correctamente ejecutando:

```bash
ionic -v
```

## 2. Creando el proyecto base

Desde el terminal ejecuta:

```bash
ionic start iCaceres sidemenu
```