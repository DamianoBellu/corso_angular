export class Pippo implements Camionista {
    nome = "";
    constructor(nome: string, cognome: string){
        this.nome = nome;
    }

    patente: string = "c";

    guidareCamion(tipo: string): void {
        console.log("Sto guidando un camion tipo " + tipo)
    }
}

// let p = new Pippo("Pippo", "Valenzi");
// p.guidareCamion()





interface Camionista {
    patente:string;

    guidareCamion(tipo: string): void;
}