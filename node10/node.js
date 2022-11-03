console.log("hola mundo");

function  mostrar(num1,num2){
    console.log("resultado es : "+num1/num2)
}
mostrar(10,7);


const fs = require("fs");

const primerTxt = fs.readFileSync("./archivos/primero.txt", "utf-8");
console.log(primerTxt);
let content = "existe un espoja de vajo del mar  bob espoja y asorbe agua sin estallar  bob espoja el mejor amigo que prodiras deciar bob espoja  "
fs.writeFileSync("./archivos/segundo.txt", content , {flag: "a"});


function getText(pathFile){
    return new Promise( (resolve,reject) => {
        fs.readFile(pathFile, "utf-8", (err, data) =>{
            if(err){
                reject(err)
            }
            resolve(data)
        })
    })

    
}
getText("./archivos/segundo.txt").then((result)=> {
    console.log(result);

})
.catch((error)=>{
    console.log(error)
});