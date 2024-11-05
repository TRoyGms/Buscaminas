import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-celda', // Ensure this matches what you're using in tablero.component.ts
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.css'],
})
export class CeldaComponent {
  @Input() celda: any; // Your input property for the celda object
}