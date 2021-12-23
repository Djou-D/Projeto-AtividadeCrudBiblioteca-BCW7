
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { LivroFormComponent } from './componentes/livro-form/livro-form.component';

// importes feitos para o projeto
import { HttpClientModule } from '@angular/common/http'
import { LivroService } from './servico/livro.service';

import { FormsModule } from '@angular/forms';


// biblioteca reativa de formularios
// import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaComponent,
    LivroFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // ReactiveFormsModule
  ],
  providers: [LivroService], //chamando o service no providers
  bootstrap: [AppComponent]
})
export class AppModule { }
