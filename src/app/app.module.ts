import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './film/film.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
