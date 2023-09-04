/*
E1: Condicionales, Ciclos y Funciones
Buenas!

Llego el momento de poner en practica los conceptos vistos hasta ahora con la primera entrega del módulo.

Deberán realizar los siguientes ejercicios:

1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

| Forma de entrega:
Los ejercicios deberán ser entregados por medio de esta plataforma.
Deberán subir su trabajo a un repositorio de Github, deployarlo en Vercel, y entregar ambos links.
No se aceptarán archivos sueltos, comprimidos ni subidos a drive.
 
| Tiempos de entrega y resolución:
Dispondrán exactamente de 1 SEMANA para realizar la entrega desde su habilitación.
Una vez que hayan realizado la entrega y desde el equipo de mentoría verifiquen que hayan trabajado en lo solicitado, se les habilitará el video de resolución de la misma en el encabezado de la entrega, para que puedan contrastar con lo realizado por ustedes, revisar si pueden mejorar algunas cosas y, en caso de que hayan tenido dudas con la resolución, puedan usar el video como guía para poder corregir aquellos puntos que no hayan logrado resolver a la hora de realizar el trabajo.
 
Cualquier consulta que tengan sobre la entrega podrán realizarla por el canal de Discord de la camada.

#HappyCoding 🤖
*/

//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function parImpar(numero) {
    if (numero % 2 === 0) {
      console.log(numero + ' es un numero par ')
    }else {
        console.log(numero + ' es un numero impar ')
    }
}

parImpar(2)
parImpar(5)
parImpar(8)
parImpar(11)


//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
function mayorMenor(numero1 , numero2) {
    if (numero1 > numero2) {
       console.log(numero1 + ' es mayor que', numero2)
    }else if (numero2 > numero1) {
        console.log(numero2 + ' es mayor que', numero1)
    }else {
        console.log('son iguales')
    }
}

mayorMenor(5, 6)
mayorMenor(9, 5)
mayorMenor(5, 5)
mayorMenor(20, 1)

//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
function multiplo5(n) {
    if (n % 5 === 0) {
        console.log(n + ' es multiplo de', 5)
    }else {
        console.log(n + ' No es multiplo de 5')
    }
}

multiplo5(15)
multiplo5(20)
multiplo5(87)
multiplo5(32)

//4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
function numerosBucle(number) {
    for (let i = 0; i <= number; i++) {
       console.log(i)
    }
}

numerosBucle(10)

//5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
function StringNumber(string, n) {
    for (let i = 0; i < n; i++) {
        console.log(string)
        
    }
}

StringNumber('juan', 5)

//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
function imprimirArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

imprimirArray([1,2,3,4,5,6])

//7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, 
//menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
function imprimirArray10(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i !== 4) {
          console.log(arr[i])
        }
    }
  }
  imprimirArray10([1,2,3,4,5,6,7,8,9,10])

//8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
function imprimirArrayMultiplicado(array, n) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]* n);
    }
}

imprimirArrayMultiplicado([1,2,3,4,5], 10)