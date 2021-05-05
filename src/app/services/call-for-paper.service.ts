import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CallForPaper } from '../models/callForPaper'

@Injectable({
  providedIn: 'root'
})
// Service permettant la récupration des Calls via des appels API, ne pas oublié de changer l'url en fonction de l'environnement d'execution
export class CallForPaperService {

  apiURL: string = 'https://the-right-call.herokuapp.com/api';
  apiURLlocal: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  public getCalls() {
    return this.http.get<CallForPaper[]>(`${this.apiURLlocal}/getCall`);
  }

  public getCallById(id: number) {
    return this.http.get(`${this.apiURLlocal}/getCall/${id}`)
  }

  public createCall(call: CallForPaper) {
    return this.http.post(`${this.apiURLlocal}/createCall`,call);
  }  

  public getCallsFilterHCERES() {
    return this.http.get<CallForPaper[]>(`${this.apiURLlocal}/getCallFilterHCERES`);
  }
  
  public getCallsFilterCNRS() {
    return this.http.get<CallForPaper[]>(`${this.apiURLlocal}/getCallFilterCNRS`);
  }

  public getCallsFilterFNEGE() {
    return this.http.get<CallForPaper[]>(`${this.apiURLlocal}/getCallFilterFNEGE`);
  }
}
