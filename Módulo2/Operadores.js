//Operadores Lógicos 
var operador1 = 1;
var operador2 = 2;
var operador3 = 3;

//Operador Lógico  && ("AND" o "Y")
var resultadoOperador_AND = ( operador1 > operador2) && (operador2 < operador3);
console.log("\nEl resultado del operador AND, es: "+ resultadoOperador_AND);

//Operador Lógico  || ("OR" o "O")
var resultadoOperador_OR = ( operador1 > operador2) && (operador2 > operador3) || (operador1 < operador3);
console.log("El resultado del operador OR, es: "+ resultadoOperador_OR);

//Operador Lógico ! ("NOT" o "NO")
var resultadoOperador_NOT = !resultadoOperador_OR;
console.log("El resultado del operador NOT, es: "+ resultadoOperador_NOT);

