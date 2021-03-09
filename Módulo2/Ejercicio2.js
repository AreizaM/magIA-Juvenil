var codigo="l3k8", dinero= 122;
var chocolate=12.50, paleta=5.75, chicle= 4.25,galleta=9.10;
if(codigo=="xc23" && dinero >= chocolate){
    console.log("\n\tCompra de chocolate exitosa, gracias por su preferencia");
    cambio = dinero - chocolate;
    console.log("\n\t\tTu cambio es de " + cambio);
}else if(codigo == "c4f2" && dinero>= paleta){
    console.log("\n\tCompra de paleta exitosa, gracias por su preferencia");
    cambio = dinero - paleta;
    console.log("\n\t\tTu cambio es de " + cambio);
}else if(codigo == "gt74" && dinero>= chicle){
    console.log("\n\tCompra de chicle exitosa, gracias por su preferencia");
    cambio = dinero - chicle;
    console.log("\n\t\tTu cambio es de " + cambio);
}else if(codigo == "l3k8" && dinero>= galleta){
    console.log("\n\tCompra de galleta exitosa, gracias por su preferencia");
    cambio = dinero - galleta;
    console.log("\n\t\tTu cambio es de " + cambio);
}else if(codigo != ("xc23","c4f2","gt74","l3k8") || dinero < 4.25){
    console.log("\n\t------------ERROR-------------");
    console.log("Ingresaste un código no valido o no tienes suficiente dinero, lo siento");
}