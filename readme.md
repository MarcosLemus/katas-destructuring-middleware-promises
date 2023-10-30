CREAR un repo con:

### ITERACIÓN 1: Destructuring arrays

Archivo: iteracion1.js dentro del repo para ejecutar directamente con `node iteracion1.js` (no hace falta serveidor de express para estos ejercicios)

- [ ] 1.- Dado el objeto **empleados**, extrae la empleada Ana completa.

```
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
```

- [ ] 2.- Dado el objeto **empleados**, extrae el email del empleado Luis --> Luis@gmail.com
- [ ] 3.- Usa destructuración para cambiar los valores de a y b;

```
// Inicialmente
let a = 5;
let b = 3;
// Al final
let a = 3;
let b = 5;
```

- [ ] 4.- Dado el objeto **HIGH_TEMPERATURES**

```
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};
```

Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana

```
const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana);
```

## ITERACIÓN 2: Promises

Crear server de express dentro del repo con las definiciones de rutas que se piden en los 2 ejercicios.

#### Ejercicio 1:

En este ejercicio utilizaremos la API de [https://dog.ceo/dog-api/](https://dog.ceo/dog-api/). Leyendo su documentación, deberás hacer lo siguiente:
Crea tres definiciones de ruta para hacer fetching a la api y devolver un response con :

- la lista de razas de todos los perros.
- la url de una imagen random de una raza.
- Una lista con todas las imágenes de una raza concreta enviada vía req.params.
  Recuerda que para estos ejercicios deberás utilizar node-fetch

### Ejercicio 2:

Para este ejercicio vamos a utilizar la API de usuarios de GitHub, la cual tiene esta URL: [https://api.github.com/users/{username}](https://api.github.com/users/%7Busername%7D). {username} es el nombre del usuario en GitHub, por lo que si quieres buscar a cualquier usuario, solo tienes que ponerlo en la url. Por ejemplo, [https://api.github.com/users/Guille-Rubio](https://api.github.com/users/Guille-Rubio). Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.
Lo primero que haremos será crear una definición de ruta en express que admita un input por (req.params) con el nombre de usuario. El usuario escribirá en el input el nombre de usuario de GitHub que quiera buscar. El servidor debe responder con la información siguiente del usuario:

- nombre
- número de repositorios
- avatar (imagen)