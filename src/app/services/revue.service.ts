import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Revue } from '../models/revue';

@Injectable({
  providedIn: 'root'
})
// Service permettant la récupration des Revues via des appels API, ne pas oublié de changer l'url en fonction de l'environnement d'execution
export class RevueService {

  apiURL: string = 'https://the-right-call.herokuapp.com/api';
  apiURLlocal: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  public getRevues() {
    return this.http.get<Revue[]>(`${this.apiURLlocal}/getRevue`);
  }

  public getRevueById(id: number) {
    return this.http.get<Revue>(`${this.apiURLlocal}/getRevue/${id}`)
  }

  public getRevueIdbyName(id: string) {
    return this.http.get(`${this.apiURLlocal}/getRevueIdbyName/${id}`)
  }

  public createRevue(revue: Revue) {
    return this.http.post(`${this.apiURLlocal}/createRevue`,revue);
  } 
}
