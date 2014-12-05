# BARRALADO JS

Este proyecto es para barraladear en javascript. La construccion de esta libreria ha sido puesta en [Coffee Script](http://coffeescript.org/).

### Dependencias:
* jQuery (a.k.a. Jotacueri)

## Ejemplo de uso:

Una vez que tengas tu DOM listo, puedes libremente llamar la funcion `barralado` sobre un elemento,
los parametros que la función `barralado` recibe son:

    $('#elemento').barralado({
      size: 220,// el ancho del barralado, pues no todos los barralados son iguales. #value
      height: 450 // la altura del barralado #value
    });

Otro ejemplo es:

    $('#elemento').barralado().delOtroLado({size: 300, height: 300});

Revisa el archivo `index.html` dentro de test.

## Contribuyendo

1. Forkea este repo.
2. Accede desde la terminal con `cd barraladojs`.
3. Ejecuta `npm install && bower install`.
4. Haz tus cambios en `src/`.
5. Haz tu commit y sube tu pull request.

Para construir barralado.js:
* Ejecuta `gulp build`. Y usa los archivos `dist/barralado.js` o `dist/barralado.min.js` según necesites.
