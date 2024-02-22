// import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';

// @Component({
//   selector: 'app-valor-propriedade',
//   templateUrl: './valor-propriedade.component.html',
//   styleUrls: ['./valor-propriedade.component.css']
// })
// export class ValorPropriedadeComponent {
//   constructor(private cdr: ChangeDetectorRef) { }
//   @Input() tituloSelecionado: string = '';
//   @Input() veiculoSelecionado: any;
//   valorExibido: string = '';

//   ngOnChanges(changes: SimpleChanges) {
//     if (changes['tituloSelecionado'] && !changes['tituloSelecionado'].firstChange) {
//       this.exibirDetalhes();
//     }
//   }

//   ngAfterViewInit() {
//     this.exibirDetalhes();
//     this.cdr.detectChanges();
//   }

//   exibirDetalhes() {
//     this.valorExibido = this.veiculoSelecionado[this.tituloSelecionado];
//   }

//   exibirValor() {
//     this.valorExibido = this.veiculoSelecionado[this.tituloSelecionado];
//   }
// }

import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { ComunicacaoService } from '../comunicacao.service'; // Importe o serviço

@Component({
  selector: 'app-valor-propriedade',
  templateUrl: './valor-propriedade.component.html',
  styleUrls: ['./valor-propriedade.component.css']
})
export class ValorPropriedadeComponent {
  constructor(private cdr: ChangeDetectorRef, private comunicacaoService: ComunicacaoService) { // Injete o serviço
    // Inscreva-se para receber mensagens
    this.comunicacaoService.comunicacao$.subscribe(mensagem => {
      console.log(mensagem);
    });
  }
  @Input() tituloSelecionado: string = '';
  @Input() veiculoSelecionado: any;
  valorExibido: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tituloSelecionado'] && !changes['tituloSelecionado'].firstChange) {
      this.exibirDetalhes();
    }
  }

  ngAfterViewInit() {
    this.exibirDetalhes();
    this.cdr.detectChanges();
  }

  exibirDetalhes() {
    this.valorExibido = this.veiculoSelecionado[this.tituloSelecionado];
  }

  exibirValor() {
    this.valorExibido = this.veiculoSelecionado[this.tituloSelecionado];
  }
}
