import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {Router} from "@angular/router";
import { ResultatDeRechercheService } from '../resultat-de-recherche/resultat-de-recherche.service';
import { CallForPaper } from 'src/app/models/callForPaper';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-recherche-avancee',
  templateUrl: './recherche-avancee.component.html',
  styleUrls: ['./recherche-avancee.component.css']
})
export class RechercheAvanceeComponent implements OnInit {

  @BlockUI('recherche-en-cours') blockUI: NgBlockUI;

  rechercheAvanceeFormGroup: FormGroup;

  error: any = {};

  paperAbstract: String;

  constructor(private formBuilder: FormBuilder, private router: Router, private resultatDeRechercheService: ResultatDeRechercheService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.rechercheAvanceeFormGroup = this.formBuilder.group({
      paperAbstract: ['', [Validators.required, Validators.maxLength(5000)]]
    })
  }

  onSubmit() {
    console.log('onSubmit');
    if(this.rechercheAvanceeFormGroup.valid) {
      this.blockUI.start();

      this.error = {}; // il n'y a plus d'erreur sur les champs du formulaire

      // Enregistrer le call dans la liste de calls
      this.ResetPaperAbstract();

      const abstract = {};
      abstract['text'] = this.rechercheAvanceeFormGroup.controls['paperAbstract'].value;
      console.log(abstract['text']);
      this.http.post(environment.apiURL + '/advanced-search', abstract).subscribe(response => {
        console.log('------- keyWords ');
        console.log(response);
        this.http.post<CallForPaper[]>(environment.apiURL + '/match-keywords', response).subscribe(calls => {
          console.log('------- calls ');
          console.log(calls);
          // Redirige vers la page
          this.resultatDeRechercheService.callForPapers = calls;

          this.blockUI.stop();
          this.router.navigate(['/advanced-search/result']);
          // this.router.navigate(['/advanced-search/result', {data: calls}]);
        });
      });
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

  // Reset le tableau de data après l'affichage des résultats
  ResetPaperAbstract(){
    this.resultatDeRechercheService.callForPapers = new Array<CallForPaper>();
  }
}
