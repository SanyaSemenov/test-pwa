import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: '../modules/joke/joke.module#JokeModule'
  }
];

