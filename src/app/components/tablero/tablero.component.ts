import { Component } from '@angular/core';
import { BuscaminasService } from '../buscaminas.service';


@Component({
  selector: 'app-tablero', // Ensure this matches what you're using in app.component.ts
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css'],
})
export class TableroComponent {
  tablero: any[][] = [];

  constructor(private buscaminasService: BuscaminasService) {}

  ngOnInit(): void {
    this.tablero = this.buscaminasService.obtenerTablero();
  }

  onCeldaClick(fila: number, columna: number) {
    this.buscaminasService.descubrirCelda(fila, columna);
  }

  onCeldaRightClick(event: MouseEvent, fila: number, columna: number) {
    event.preventDefault(); // Prevent default context menu
    this.buscaminasService.marcarCelda(fila, columna);
  }

  isJuegoTerminado(): boolean {
    return this.buscaminasService.juegoTerminado;
  }
}
