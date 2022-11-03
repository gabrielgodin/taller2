console.log("CARGANDO BANNER ..");
console.log("CARGANDO TEXTO ..");
let tareaAsincrona = () => {
    let promesa = new Promise (( resolve, reject) => {
        setTimeout(() =>{
            console.log("Mensajes cargados asincronicamente");
            resolve();
        },1300)
    })
    return promesa
}
tareaAsincrona();
console.log("Cargando Footer")