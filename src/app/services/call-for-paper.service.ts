import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CallForPaper } from '../models/callForPaper'

@Injectable({
  providedIn: 'root'
})
// Service permettant la récupration des Calls via des appels API, ne pas oublié de changer l'url en fonction de l'environnement d'execution
export class CallForPaperService {

  apiURL: string = 'https://etud-kvm-oboub.leria-etud.univ-angers.fr/api';
  apiURLlocal: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  public getCalls() {
    const url = `${this.apiURL}/getCall`;
    console.log('getCalls |  url = ' + url);
    return this.http.get<CallForPaper[]>(url);
  }

  public getCallById(id: number) {
    const url = `${this.apiURL}/getCall/${id}`;
    console.log('getCallById |  url = ' + url);
    return this.http.get(url);
  }

  public createCall(call: CallForPaper) {
    const url = `${this.apiURL}/createCall`;
    console.log('createCall |  url = ' + url);
    return this.http.post(url, call);
  }

  public getCallsFilterHCERES() {
    const url = `${this.apiURL}/getCallFilterHCERES`;
    console.log('getCallsFilterHCERES |  url = ' + url);
    return this.http.get<CallForPaper[]>(url);
  }

  public getCallsFilterCNRS() {
    const url = `${this.apiURL}/getCallFilterCNRS`;
    console.log('getCallsFilterCNRS |  url = ' + url);
    return this.http.get<CallForPaper[]>(url);
  }

  public getCallsFilterFNEGE() {
    const url = `${this.apiURL}/getCallFilterFNEGE`;
    console.log('getCallsFilterFNEGE |  url = ' + url);
    return this.http.get<CallForPaper[]>(url);
  }
}
