# Angular, Ionic y Django: Amigos con derecho a roce

## Instalando dependencias

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

### 1.2 Instalando el CLI de Angular

Para instalar el CLI de Angular sólo necesitamos ejecutar:

```bash
sudo npm install -g @angular/cli
```

Comprobamos que todo ha ido bien ejecutando: 

```bash
ng -v
```

## 2 Creando el proyecto base

Para crear el proyecto que utilizaremos como base sólo necesitamos ejecutar:

```bash
ng new iCaceres --style scss
```
