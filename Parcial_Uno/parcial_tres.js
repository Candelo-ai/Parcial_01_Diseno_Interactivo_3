// No cambies los nombres de las funciones.

function devolverPrimerElemento (array) {
  return array[0];
}

function devolverUltimoElemento (array) {
  return array[array.length - 1];
}

function obtenerLargoDelArray (array) {
  return array.length;
}

function incrementarPorUno (array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + 1;
  }
  return array;
}

function agregarItemAlFinalDelArray (array, elemento) {
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray (array, elemento) {
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase (palabras) {
  return palabras.join(" ");
}

function arrayContiene (array, elemento) {
  return array.includes(elemento);
}

function agregarNumeros (numeros) {
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  return suma;
}

function promedioResultadosTest (resultadosTest) {
  let suma = 0;

  for (let i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i];
  }

  return suma / resultadosTest.length;
}

function numeroMasGrande (numeros) {
  let mayor = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }

  return mayor;
}

function multiplicarArgumentos () {
  if (arguments.length === 0) {
    return 0;
  }

  if (arguments.length === 1) {
    return arguments[0];
  }

  let producto = 1;

  for (let i = 0; i < arguments.length; i++) {
    producto *= arguments[i];
  }

  return producto;
}

function cuentoElementos (arreglo) {
  let contador = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      contador++;
    }
  }

  return contador;
}

function diaDeLaSemana (numeroDeDia) {
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana";
  } else {
    return "Es dia Laboral";
  }
}

function empiezaConNueve (n) {
  let str = n.toString();
  return str[0] === "9";
}

function todosIguales (arreglo) {
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] !== arreglo[0]) {
      return false;
    }
  }

  return true;
}

function mesesDelAño (array) {
  let nuevoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "Enero" ||
        array[i] === "Marzo" ||
        array[i] === "Noviembre") {
      nuevoArray.push(array[i]);
    }
  }

  if (nuevoArray.length < 3) {
    return "No se encontraron los meses pedidos";
  }

  return nuevoArray;
}

function mayorACien (array) {
  let nuevoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      nuevoArray.push(array[i]);
    }
  }

  return nuevoArray;
}

function breakStatement (numero) {
  let array = [];
  let suma = numero;

  for (let i = 0; i < 10; i++) {
    suma = suma + 2;

    if (suma === i) {
      return "Se interrumpió la ejecución";
    }

    array.push(suma);
  }

  return array;
}

function continueStatement (numero) {
  let array = [];
  let suma = numero;

  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }

    suma = suma + 2;
    array.push(suma);
  }

  return array;
}


module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
}
