import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ICep } from '../tab2/tab2.page';

@Injectable({
  providedIn: 'root'
})
export class GetCepServiceService {

  constructor(private httpClient: HttpClient) {}

  public getCepInfo(cep: string):Observable<ICep>{
    return this.httpClient.get<any>(`https://viacep.com.br/ws/${cep}/json/`).pipe(map(response => response as ICep))
  }
}
