// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function par_impar(number) {
  if (number % 2 == 0) {
    console.log(`${number} es par`);
  } else {
    console.log(`${number} es impar`);
  }
}

par_impar(10);

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function mayor_igual(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} es mayor que ${num2}`);
  } else if (num1 < num2) {
    console.log(`${num2} es mayor que ${num1}`);
  } else {
    console.log(`${num1} y ${num2} son iguales`);
  }
}
mayor_igual(1, 5);

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiplo5(number) {
  if (number % 5 == 0) {
    console.log(`${number} es múltiplo de 5`);
  } else {
    console.log(`${number} no es múltiplo de 5`);
  }
}
multiplo5(201);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function yallegalaseptima(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
}

yallegalaseptima(7);

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function nombre(palabra, num) {
  for (let i = 1; i <= num; i++) {
    console.log(palabra);
  }
}

nombre("Seba", 20);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const semana = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];

function dias(semana) {
  for (let i = 0; i < semana.length; i++) console.log(semana[i]);
}

dias(semana);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function PrintNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) if (i !== 4) console.log(numbers[i]);
}

PrintNumbers(numbers);

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const numbers3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

function MultiplyNumbers(numbers3, num) {
  for (let i = 0; i < numbers3.length; i++) {
    const multiplicador = numbers3[i];
    const resultado = numbers3[i] * num;
    console.log(`${num} x ${multiplicador} = ${resultado}`);
  }
}

MultiplyNumbers(numbers3, 6);
