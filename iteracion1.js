const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];
//console.log(empleados);
/*
const myArray = [10, 20, 30, 40, 50];
const [first, , , , last] = myArray;
console.log(first); // 10
console.log(last); // 50
*/
const [, ana] = empleados;

console.log(ana);

const [{ email }, luis, , ,] = empleados;
console.log(email);

/*
3.- Usa destructuración para cambiar los valores de a y b;

// Inicialmente
let a = 5;
let b = 3;
// Al final
let a = 3;
let b = 5;
*/

// const a = 5;
// const b = 3;

// const [key1, key2] = aux;

/*
Cambiar las siguientes líneas para guardar mediante destructuración los valores de temperaturas en las variables maximaHoy y maximaManana

```
const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana);
```
*/

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

const {
  yesterday,
  today: maximaHoy,
  tomorrow: maximaManana,
} = HIGH_TEMPERATURES;

console.log(maximaHoy, maximaManana);
