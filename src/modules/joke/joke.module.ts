import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JokeService } from './joke.service';
import { RootComponent } from './components';
import { RouterModule } from '@angular/router';
import { routes } from './joke.routing';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [
    JokeService
  ]
})
export class JokeModule { }
