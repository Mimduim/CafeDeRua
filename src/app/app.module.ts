import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NoticiasEstaticaComponent } from './noticias-estatica/noticias-estatica.component';
import { NoticiasDinamicaComponent } from './noticias-dinamica/noticias-dinamica.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    NoticiasEstaticaComponent,
    NoticiasDinamicaComponent,
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
