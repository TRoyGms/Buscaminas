import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Make sure you have a routes file if you're using this

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes) // Only provide routing here
  ],
};
