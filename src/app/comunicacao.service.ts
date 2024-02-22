import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ComunicacaoService {

    private comunicacaoSource = new Subject<string>();

    // Observable string streams
    comunicacao$ = this.comunicacaoSource.asObservable();

    // Service message commands
    comunicar(mensagem: string) {
        this.comunicacaoSource.next(mensagem);
    }
}
