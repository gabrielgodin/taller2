let nombres= ['carlos','MARIA','peres','oscar','gabriel'];

for (let i = 0; i <= nombres.length; i++) {
    let clave = nombres[i].startsWith("MARIA");
    console.log(nombres[i]);
    if(clave){
        console.log("HOLA "+nombres[i] )
    }
}



console.log("OPERADOR LOGICO AMD")

console.log(45 && true);
console.log(false && 25);

// OPERRADOR OR 

console.log(null || false);
console.log(true || false);


const data = {balas : 0};
 console.log(data .balas || "Sin balas");
 console.log(data.balas ?? "Sin balas");


 const requerido = true;
 const saludar = () => "hola Bienvenidos a su clase !";
 console.log(requerido && saludar());

 const celular  = {
     color : "blue",
     modelo: "A21s",
     marca : "Samsaung",
     resolucion : "1200",
     numbotones : "2",
     notificacion : () => "clink clink respode puto ",
     apagarcel: function(){
        return console.log("Apagar");
     }
 }
 const tableta = {
    color : "blue",
    modelo: "A21s",
    marca : "Samsaung",
    resolucion : "1200",
    numbotones : "2",
    
    apagarcel: function(){
       return console.log("Apagar")
    }
 }
 console.log(celular.modelo);
 console.log(celular.apagarcel());