// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-carrinho',
//   templateUrl: './carrinho.component.html',
//   styleUrls: ['./carrinho.component.css']
// })
// export class CarrinhoComponent {
//   @Input() nomesVeiculos: string[] = [];
//   exibirBotoesRodape: boolean = true;

//   acaoBotao1() {
//   }

//   acaoBotao2() {
//   }

//   acaoBotao3() {
//   }
// }


import { Component } from '@angular/core';
import { ComunicacaoService } from '../comunicacao.service'; // Importe o serviço

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  nomesVeiculos: string[] = [];
  exibirBotoesRodape: boolean = true;

  constructor(private comunicacaoService: ComunicacaoService) { // Injete o serviço
    // Inscreva-se para receber mensagens
    this.comunicacaoService.comunicacao$.subscribe(mensagem => {
      this.nomesVeiculos.push(mensagem);
    });
  }

  acaoBotao1() {
  }

  acaoBotao2() {
  }

  acaoBotao3() {
  }
}
