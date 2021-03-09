//Variables con las notas correpondientes
var nota1 = 3.0;
var nota2 = 5.0;
var nota3 = 1.5;
var nota4 = 4.8;


//Uso el condicional AND(&&) para no tener que buscar y crear más procesos fuera del if
if(nota2>nota1 && nota3>nota1 && nota4>nota1){
    var notaFinal = (nota2+nota3+nota4)/3;
    console.log(notaFinal);
}else if(nota1>nota2 && nota3>nota2 && nota4>nota2){
    var notaFinal = (nota1+nota3+nota4)/3;
    console.log(notaFinal);
}else if(nota2>nota3 && nota1>nota3 && nota4>nota3){
    var notaFinal = (nota2+nota1+nota4)/3;
    console.log(notaFinal);
}else if(nota2>nota1 && nota3>nota1 && nota1>nota4){
    var notaFinal = (nota2+nota3+nota1)/3;
    console.log(notaFinal);
}