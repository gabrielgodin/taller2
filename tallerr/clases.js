class Persona {
    constructor ( nombre , age , raza){
        this.nombre = nombre;
        this.age = age;
        this.raza = raza;
    }
    saludar(){
        console.log("Hola a todos ");
    }
    mostrarinformacion(){
        console.log(
        `nombre ${this.nombre}
        AÑO ${this.age}
        Raza ${this.raza}`
     )
        
    }
}
class Profesor extends Persona{
    constructor( nombre, age, raza, profecion ){
        super(nombre,age,raza);
        this.profecion = profecion;
    }
    infoprofesor(){
        console.log(
            `nombre ${this.nombre}
            AÑO ${this.age}
            Raza ${this.raza}
            profecion ${this.profecion}`
         )
    }
}

let person = new  Persona('Marc Zunkenber',42,'reptil');
let gabriel = new Profesor("jESUALDO",40,"HUMANO", "ING SISTEMAS")
person.saludar();
person.mostrarinformacion();
gabriel.infoprofesor();
