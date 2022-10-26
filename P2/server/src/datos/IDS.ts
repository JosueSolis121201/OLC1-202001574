class GeneradorIDS{
    ID:number;

    constructor() {
        this.ID = 0;
    }

    public GenerarID(){
        this.ID++;
        return `GRA${this.ID}`;
        
    }
}

export default {
    Generador: new GeneradorIDS()
}
