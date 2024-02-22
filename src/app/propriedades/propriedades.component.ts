// import { Component, EventEmitter, Input, Output } from '@angular/core';

// @Component({
//   selector: 'app-propriedades',
//   templateUrl: './propriedades.component.html',
//   styleUrls: ['./propriedades.component.css']
// })
// export class PropriedadesComponent {
//   @Input() veiculos: any[] = [];
//   @Input() itensVeiculoSelecionado: any;
//   @Input() veiculoSelecionado: any;
//   @Output() selecionarTitulo = new EventEmitter<string>();

//   emitirTituloSelecionado(titulo: string) {
//     this.selecionarTitulo.emit(titulo);
//   }

//   getNomesVeiculos(): string[] {
//     if (this.veiculoSelecionado) {
//       return Object.keys(this.veiculoSelecionado);
//     } else {
//       return [];
//     }
//   }
// }

import { Component, Input } from '@angular/core';
import { ComunicacaoService } from '../comunicacao.service'; // Importe o serviço

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrls: ['./propriedades.component.css']
})
export class PropriedadesComponent {
  constructor(private comunicacaoService: ComunicacaoService) { } // Injete o serviço
  @Input() veiculos: any[] = [];
  @Input() itensVeiculoSelecionado: any;
  @Input() veiculoSelecionado: any;

  emitirTituloSelecionado(titulo: string) {
    // Use o serviço para emitir a mensagem
    this.comunicacaoService.comunicar(titulo);
  }

  getNomesVeiculos(): string[] {
    if (this.veiculoSelecionado) {
      return Object.keys(this.veiculoSelecionado);
    } else {
      return [];
    }
  }
}
