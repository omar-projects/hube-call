import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CallForPaper } from '../models/callForPaper'
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
// Service permettant la récupration des Calls via des appels API, ne pas oublié de changer l'url en fonction de l'environnement d'execution
export class CallForPaperService {

  apiURL: string = environment.apiURL;

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

  public getCallsByRank(rank: string) {
    let url;

    if(rank === "CNRS"){
      url = `${this.apiURL}/getCallFilterCNRS`;
    } else if(rank === "HCERES") {
      url = `${this.apiURL}/getCallFilterHCERES`;
    } else if(rank === "FNEGE") {
      url = `${this.apiURL}/getCallFilterFNEGE`;
    } else {
      url = `${this.apiURL}/getCall`
    }
    
    console.log('getCallsByRank |  url = ' + url);
    return this.http.get<CallForPaper[]>(url);
  }

}
