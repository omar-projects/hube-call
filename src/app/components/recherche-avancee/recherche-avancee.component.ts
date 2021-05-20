import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {Router} from "@angular/router";
import { ResultatDeRechercheService } from '../resultat-de-recherche/resultat-de-recherche.service';
import { CallForPaper } from 'src/app/models/callForPaper';

@Component({
  selector: 'app-recherche-avancee',
  templateUrl: './recherche-avancee.component.html',
  styleUrls: ['./recherche-avancee.component.css']
})
export class RechercheAvanceeComponent implements OnInit {

  rechercheAvanceeFormGroup: FormGroup;

  error: any = {};

  paperAbstract: String;

  constructor(private formBuilder: FormBuilder, private router: Router, private resultatDeRechercheService: ResultatDeRechercheService) { 
  }

  ngOnInit(): void {
    this.rechercheAvanceeFormGroup = this.formBuilder.group({
      paperAbstract: ['', [Validators.required, Validators.maxLength(5000)]]
    })
  }

  onSubmit() {
    if(this.rechercheAvanceeFormGroup.valid) {
      this.error = {}; // il n'y a plus d'erreur sur les champs du formulaire

      // Enregistrer le call dans la liste de calls
      this.addPaperToList(this.getFakeData());
      this.addPaperToList(this.getFakeData2());

      //Redirige vers la page
      this.router.navigate(['/advanced-search/result']);

    } else {
      this.affichageErreur();
    }
  }

  // Remplie le champs 'error' en fonction de l'état du formulaire pour afficher les erreurs
  affichageErreur() {
    this.error.paperAbstract = !this.isFieldValid('paperAbstract');
  }

  // Retourne true si le champs 'fied' n'est pas valide
  isFieldValid(field: string) {
    return this.rechercheAvanceeFormGroup.get(field).valid;
  } 

  // Set les données qui seront envoyées à la page de resultats
  addPaperToList(call: CallForPaper){
    this.resultatDeRechercheService.callForPapers.push(call);
  }


  //#############################################################################################
  //
  // TEST : CREATION DE DONNEES FICTIVES

  getFakeData(): CallForPaper{
    let call =  new CallForPaper();
    call.id = 0;
    call.title = "Title test";
    call.deadline = new Date();
    call.desc = "Description test";
    call.url = "https://www.google.fr/";
    call.fk_revue = 0;    

    return call;
  }

  getFakeData2(): CallForPaper{
    let call =  new CallForPaper();
    call.id = 1;
    call.title = "Title test2";
    call.deadline = new Date();
    call.desc = "Description test2";
    call.url = "https://www.google.fr/";
    call.fk_revue = 1;    

    return call;
  }
}
