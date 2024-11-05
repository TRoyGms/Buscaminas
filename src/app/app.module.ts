import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TableroComponent } from './components/tablero/tablero.component';
import { CeldaComponent } from './components/celda/celda.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Define your routes here if you have any
];

@NgModule({
  declarations: [
    AppComponent, // Declare AppComponent here
    TableroComponent, // Declare TableroComponent here
    CeldaComponent, // Declare CeldaComponent here
    // Add any other components you have
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Import RouterModule for routing if necessary
  ],
  bootstrap: [AppComponent], // Bootstrap with AppComponent
})
export class AppModule {}
