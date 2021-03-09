/*En esta sesión se hara un leve ejercicio de unidas,decenas y centenas

Usaremos en este caso el uso de la condicional If
*/

var numero = 132;
var centena =parseInt(numero/100);
var decena =parseInt((numero%100)/10);
var unidad =parseInt((numero%100)%10); 
if(numero<=999){
    if(numero>99 && numero < 1000){
        console.log("Número: "+ numero + "\nC:" + centena + " ,D:" + decena + " ,U:" + unidad);
        console.log("El número ingresado es una centena ");
    }else if(numero>9 && numero<100){
        console.log("Número: "+ numero + "\nC:" + centena + " ,D:" + decena + " ,U:" + unidad);
        console.log("El número ingresado es una decena ");   
    }else{
        console.log("Número: "+ numero + "\nC:" + centena + " ,D:" + decena + " ,U:" + unidad);
        console.log("El número ingresado es una unidad ");
    }
}else{
    console.log("\n<-------ERROR--------->");
    console.log("Debes ingresar un número de tres cifras, bbé :D");
}