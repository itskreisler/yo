# Yo

Catalago de ti mismo...

## Installation

Use el administrador de paquetes [node](https://nodejs.org/es/) para instalar [Yo](https://github.com/itskreisler/yo).

```bash
npm install
```

## Scripts

```bash
# Inicia un servidor local en https//:localhost:3000
npm run start

# Hace un build de la aplicación
npm run build

# Hace un despliegue a github pages
npm run deploy

# Otra forma de hacer build de la aplicación
npm run docs

# Inicia un servidor local con los archivos estaticos
## Requiere `npm run build`
npm run local

# Hace el build de la aplicación en android
npm run build-android

# Reemplaza el logo y splash screen de la aplicación android
## Requiere la carpeta y archivos 
### ~resources/icon.png(1024x1024) & ~resources/splash.png(1920x1920)
#### ~resources/android/icon-background.png(1024x1024) & ~resources/android/icon-foreground.png(1024x1024)
npm run build-resources
```

## Contribuye
Las [solicitudes de extracción](https://github.com/itskreisler/yo/pulls) son bienvenidas. Para cambios importantes, primero abra un [problema](https://github.com/itskreisler/yo/issues) para discutir lo que le gustaría cambiar.

Asegúrese de actualizar las pruebas según corresponda.

## Licencia
[MIT](https://choosealicense.com/licenses/mit/)