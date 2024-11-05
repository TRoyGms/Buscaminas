import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BuscaminasService {
  private filas: number;
  private columnas: number;
  private minas: number;
  private tablero: any[][] = [];
  public juegoTerminado: boolean;

  constructor() {
    this.filas = 10;
    this.columnas = 10;
    this.minas = 15;
    this.juegoTerminado = false; // Inicialmente el juego no está terminado
    this.inicializarTablero(); // Call to initialize the board
  }

  // Ensure there's only one definition of this function
  private inicializarTablero() {
    this.tablero = Array.from({ length: this.filas }, () =>
      Array(this.columnas).fill({ mina: false, descubierto: false, marcado: false, minasAlrededor: 0 })
    );
    this.colocarMinas();
    this.calcularMinasAlrededor();
  }

  private colocarMinas() {
    let minasRestantes = this.minas;
    while (minasRestantes > 0) {
      const fila = Math.floor(Math.random() * this.filas);
      const columna = Math.floor(Math.random() * this.columnas);
      if (!this.tablero[fila][columna].mina) {
        this.tablero[fila][columna].mina = true;
        minasRestantes--;
      }
    }
  }

  private calcularMinasAlrededor() {
    for (let fila = 0; fila < this.filas; fila++) {
      for (let columna = 0; columna < this.columnas; columna++) {
        if (this.tablero[fila][columna].mina) {
          this.incrementarMinasAlrededor(fila, columna);
        }
      }
    }
  }

  private incrementarMinasAlrededor(fila: number, columna: number) {
    for (let i = fila - 1; i <= fila + 1; i++) {
      for (let j = columna - 1; j <= columna + 1; j++) {
        if (i >= 0 && i < this.filas && j >= 0 && j < this.columnas && !(i === fila && j === columna)) {
          this.tablero[i][j].minasAlrededor++;
        }
      }
    }
  }

  obtenerTablero() {
    return this.tablero;
  }

  descubrirCelda(fila: number, columna: number) {
    if (this.juegoTerminado || this.tablero[fila][columna].marcado) return;

    if (this.tablero[fila][columna].mina) {
      this.juegoTerminado = true;
    } else {
      this.tablero[fila][columna].descubierto = true;
    }
  }

  marcarCelda(fila: number, columna: number) {
    if (!this.tablero[fila][columna].descubierto) {
      this.tablero[fila][columna].marcado = !this.tablero[fila][columna].marcado;
    }
  }
}
