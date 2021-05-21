import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Editeur } from '../models/editeur';

@Injectable({
  providedIn: 'root'
})
export class EditeurService {

  apiURL: string = environment.apiURL;

  constructor(private http: HttpClient) {}

  public getEditeurs() {
    return this.http.get<Editeur[]>(`${this.apiURL}/getEditeur`);
  }

  public getNbCallByEditeur() {
    return this.http.get<Editeur[]>(`${this.apiURL}/getNbCallByEditeur`);
  }

}
