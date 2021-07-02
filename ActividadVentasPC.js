// MAIN CLASS => DISPOSITIVO

class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }

  set tipoEntrada(tipoEntrada) {
    return (this._tipoEntrada = tipoEntrada);
  }

  get marca() {
    return this._marca;
  }
  set marca(marca) {
    return (this._marca = marca);
  }
}
// Clase RATON
class Raton extends DispositivoEntrada {
  static contadorRatones = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._contadorRatones = ++Raton.contadorRatones;
  }
  toString() {
    return ` \n MOUSE: ${this._contadorRatones} ${this._tipoEntrada} ${this._marca}`;
  }
}

// Clase Teclado
class Teclado extends DispositivoEntrada {
  static contadorTeclados = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._contadorTeclados = ++Teclado.contadorTeclados;
  }
  toString() {
    return `\n TECLADO: ${this._contadorTeclados} ${this._tipoEntrada} ${this._marca}`;
  }
}

// CLASE INDEPENDIENTE MONITOR
class Monitor {
  static contadorMonitores = 0;

  constructor(marca, tamaño) {
    this._contadorMonitores = ++Monitor.contadorMonitores;
    this._marca = marca;
    this._tamaño = tamaño;
  }

  get marca() {
    return this._marca;
  }
  set marca(marca) {
    return (this._marca = marca);
  }
  get tamaño() {
    return this.tamaño;
  }
  set tamaño(tamaño) {
    return (this._tamaño = tamaño);
  }
  toString() {
    return `\n MONITOR: ${this._contadorMonitores} ${this._marca} ${this._tamaño}`;
  }
}

// CLASE COMPUTADORA ==========================================>
class COMPUTADORA {
  static contadorComputadora = 0;
  constructor(nombre, monitor, raton, teclado) {
    this._idMonitor = ++COMPUTADORA.contadorComputadora;
    this._nombre = nombre;
    this._monitor = monitor;
    this._raton = raton;
    this._teclado = teclado;
  }
  toString() {
    return ` \n COMPUTADORA:${this._idMonitor} ${this._nombre} ${this._monitor} ${this._raton} ${this._teclado}`;
  }
}

class Orden {
  static contadorOrden = 0;
  constructor() {
    this._idOrden = ++Orden.contadorOrden;
    this._computadoras = [];
  }
  get idOrden() {
    return this._idOrden;
  }

  agregarComputadora(COMPUTADORA) {
    this._computadoras.push(COMPUTADORA);
  }
  mostrarOrden() {
    let computadorasOrden = "";
    for (let computadora of this._computadoras) {
      computadorasOrden += `\n ${computadora}`;
    }
    console.log(`ORDEN: ${this._idOrden}, COMPUTADORA: ${computadorasOrden}`);
  }
}

// Testing =======================================>
let raton1 = new Raton("USB", "Razer");

let teclado1 = new Teclado("USB2", "Docky");

let monitor1 = new Monitor("Asus", "64PIX");

let monitor2 = new Monitor("Dragon", "32PX");

//PARA LLAMAR POR REFERENCIA SE LLAMA EL ATRIBUTO DE LAS OTRAS CLASES COMO SE VE A CONTINUACION DONDE LLAMAOS AL MONITOR1 ETC
let PC1 = new COMPUTADORA("JOHANPC", monitor1, raton1, teclado1);
// console.log(PC1.toString());

let orden1 = new Orden();
orden1.agregarComputadora(PC1);
orden1.mostrarOrden();
