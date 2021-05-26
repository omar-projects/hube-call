import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SousCategorie } from '../models/sousCategorie';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
// Service permettant la récupration des Revues via des appels API, ne pas oublié de changer l'url en fonction de l'environnement d'execution
export class SousCategorieService {

  apiURL: string = environment.apiURL;

  constructor(private http: HttpClient) {}

  public getSousCategories() {
    const url = `${this.apiURL}/getSousCategorie`;
    console.log('getRevues |  url = ' + url);
    return this.http.get<SousCategorie[]>(url);
  }
}
