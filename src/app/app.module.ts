import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ClassesComponent } from './classes/classes.component';
import { ObjetosComponent } from './objetos/objetos.component';
import { PropriedadesComponent } from './propriedades/propriedades.component';
import { SearchJsonComponent } from './search-json/search-json.component';
import { ValorPropriedadeComponent } from './valor-propriedade/valor-propriedade.component';

// Importe o serviço
import { ComunicacaoService } from './comunicacao.service';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    ClassesComponent,
    ObjetosComponent,
    PropriedadesComponent,
    ValorPropriedadeComponent,
    SearchJsonComponent
  ],
  imports: [
    BrowserModule
  ],
  // Adicione o serviço aos provedores
  providers: [ComunicacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
