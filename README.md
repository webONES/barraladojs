# BARRALADO JS

Este proyecto es para barraladear en javascript.

### Dependencias:
* jQuery

## Ejemplo de uso:

Una vez que tengas tu DOM listo, puedes libremente llamar la funcion `barralado` sobre un elemento,
los parametros que la función `barralado` recibe son:

    $('#elemento').barralado({
      size: 120  // es el tamaño del barralado, pues no todos los barralados son iguales.
    });

Revisa el archivo `index.html` dentro de test.

## Contribuyendo

1. Forkea este repo.
2. Accede desde la terminal con `cd barraladojs`.
3. Ejecuta `npm install && bower install`.
4. Haz tus cambios en `src/`.
5. Haz tu commit y sube tu pull request.

Para construir barralado.js:
* Ejecuta `gulp dist`. Y usa los archivos `dist/barralado.js` o `dist/barralado.min.js` según necesites.