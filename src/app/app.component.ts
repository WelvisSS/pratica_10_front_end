// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   categoriaSelecionada: string | null = null;
//   veiculos: { Name: string }[] = [];
//   veiculoSelecionado: string | null = null;
//   nomesVeiculos: string[] = [];
//   tituloSelecionado: string | null = null;
//   mostrarAdicionarObjeto: boolean = false;
//   exibirBotoesRodape: boolean = false;

//   onCategoriaSelecionada(categoria: string) {
//     this.categoriaSelecionada = categoria;
//   }

//   onVeiculosSelecionados(veiculos: { Name: string }[]) {
//     this.veiculos = veiculos;
//   }

//   onVeiculoSelecionado(veiculo: string) {
//     this.veiculoSelecionado = veiculo;
//   }

//   onNomesVeiculosSelecionados(nomesVeiculos: string[]) {
//     // Implemente a lógica necessária aqui
//   }

//   onTituloSelecionado(titulo: string) {
//     this.tituloSelecionado = titulo;
//     this.mostrarAdicionarObjeto = true;
//   }

//   onAdicionarAoCarrinhoClicado(nomeVeiculo: string) {
//     // Lógica para quando o botão "Adicionar ao carrinho" for clicado
//     // Não há console.log aqui

//     // Adiciona o nome do veículo à lista de nomesVeiculos
//     this.nomesVeiculos.push(nomeVeiculo);

//     // Define a visibilidade dos botões no rodapé como true
//     this.exibirBotoesRodape = true;
//   }
// }


import { Component } from '@angular/core';
import { ComunicacaoService } from './comunicacao.service'; // Importe o serviço

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private comunicacaoService: ComunicacaoService) { // Injete o serviço
    // Inscreva-se para receber mensagens
    this.comunicacaoService.comunicacao$.subscribe(mensagem => {
      // Adicione a mensagem à lista de nomesVeiculos
      this.nomesVeiculos.push(mensagem);
      // Define a visibilidade dos botões no rodapé como true
      this.exibirBotoesRodape = true;
    });
  }
  categoriaSelecionada: string | null = null;
  veiculos: { Name: string }[] = [];
  veiculoSelecionado: string | null = null;
  nomesVeiculos: string[] = [];
  tituloSelecionado: string | null = null;
  mostrarAdicionarObjeto: boolean = false;
  exibirBotoesRodape: boolean = false;

  onCategoriaSelecionada(categoria: string) {
    this.categoriaSelecionada = categoria;
  }

  onVeiculosSelecionados(veiculos: { Name: string }[]) {
    this.veiculos = veiculos;
  }

  onVeiculoSelecionado(veiculo: string) {
    this.veiculoSelecionado = veiculo;
  }

  onNomesVeiculosSelecionados(nomesVeiculos: string[]) {
    // Implemente a lógica necessária aqui
  }

  onTituloSelecionado(titulo: string) {
    this.tituloSelecionado = titulo;
    this.mostrarAdicionarObjeto = true;
  }

  onAdicionarAoCarrinhoClicado(nomeVeiculo: string) {
    // Lógica para quando o botão "Adicionar ao carrinho" for clicado
    // Não há console.log aqui
  }
}
