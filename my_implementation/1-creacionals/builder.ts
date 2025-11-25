class Computadora{
    public monitor: string = "";
    public teclado: string = "";     
    public raton: string = "";
    public cpu: string = "";

  
    
    public displayConfiguration(): string{
        return `Monitor: ${this.monitor}, Teclado: ${this.teclado}, Raton: ${this.raton}, CPU: ${this.cpu}`;
    }
}

class ComputadoraBuilder{
  private computadora: Computadora;

    constructor(){  
        this.computadora = new Computadora();
    }

    setMonitor(monitor: string): ComputadoraBuilder{
        this.computadora.monitor = monitor;
        return this;
    }
    
    setTeclado(teclado: string): ComputadoraBuilder{
        this.computadora.teclado = teclado;
        return this;
    }
    setRaton(raton: string): ComputadoraBuilder{
        this.computadora.raton = raton;
        return this;
    }
    setCPU(cpu: string): ComputadoraBuilder{
        this.computadora.cpu = cpu;
        return this;
    }

    build(): Computadora{
        return this.computadora;
    }
}

function main(){
    const computadora: Computadora = new ComputadoraBuilder()
        .setMonitor("Dell 24")
        .setTeclado("Logitech K120")
        .setRaton("Logitech M90")
        .setCPU("Intel i5")
        .build();

    console.log(computadora.displayConfiguration());
}

main();