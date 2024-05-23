import { Component } from '@angular/core';
import { GetCepServiceService } from '../services/get-cep-service.service';

export interface ICep {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private getCepService: GetCepServiceService) {}


  public showTable: boolean = false
  public cepNumber: string = ''
  public cepInfo:ICep = {
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    ibge: '',
    gia: '',
    ddd: '',
    siafi: ''
  }

  public eventHandler(event: KeyboardEvent){
    this.cepNumber = (event.target as HTMLInputElement).value
    this.getCepInfo(this.cepNumber)
  }

  public getCepInfo(cepNumber: string){
    if(cepNumber.length === 8){
      const result = this.getCepService.getCepInfo(cepNumber).subscribe((data: ICep) => {
        this.cepInfo = data
      })
      this.showTable = true
    }else{
      this.showTable = false
    }
  }



}
