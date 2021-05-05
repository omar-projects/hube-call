import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recherche-avancee',
  templateUrl: './recherche-avancee.component.html',
  styleUrls: ['./recherche-avancee.component.css']
})
export class RechercheAvanceeComponent implements OnInit {

  rechercheAvanceeFormGroup: FormGroup;

  error: any = {};

  constructor(private formBuilder: FormBuilder) { 
  }

  ngOnInit(): void {
    this.rechercheAvanceeFormGroup = this.formBuilder.group({
      abstract: ['', [Validators.required, Validators.maxLength(5000)]]
    })
  }

  onSubmit() {
    if(this.rechercheAvanceeFormGroup.valid) {
      this.error = {}; // il n'y a plus d'erreur sur les champs du formulaire

      // SUITE

    } else {
      this.affichageErreur();
    }
  }

  // Remplie le champs 'error' en fonction de l'état du formulaire pour afficher les erreurs
  affichageErreur() {
    this.error.abstract = !this.isFieldValid('abstract');
  }

  // Retourne true si le champs 'fied' n'est pas valide
  isFieldValid(field: string) {
    return this.rechercheAvanceeFormGroup.get(field).valid;
  } 

}
