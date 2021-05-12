import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Revue } from '../models/revue';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
// Service permettant la récupration des Revues via des appels API, ne pas oublié de changer l'url en fonction de l'environnement d'execution
export class RevueService {

  apiURL: string = environment.apiURL;

  constructor(private http: HttpClient) {}

  public getRevues() {
    const url = `${this.apiURL}/getRevue`;
    console.log('getRevues |  url = ' + url);
    return this.http.get<Revue[]>(url);
  }

  public getRevueById(id: number) {
    const url = `${this.apiURL}/getRevue/${id}`;
    console.log('getRevueById |  url = ' + url);
    return this.http.get<Revue>(url);
  }

  public getRevueIdbyName(id: string) {
    const url = `${this.apiURL}/getRevueIdbyName/${id}`;
    console.log('getRevueIdbyName |  url = ' + url);
    return this.http.get(url);
  }

  public createRevue(revue: Revue) {
    const url = `${this.apiURL}/createRevue`;
    console.log('createRevue |  url = ' + url);
    return this.http.post(url, revue);
  }
}
