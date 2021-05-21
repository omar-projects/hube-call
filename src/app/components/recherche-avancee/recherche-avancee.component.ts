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
      this.ResetPaperAbstract();

      //exemple 1
      this.addPaperToList(this.getFakeData());
      this.addAccuracyToList(12);
      //exemple 2
      this.addPaperToList(this.getFakeData2());
      this.addAccuracyToList(70);


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

  // Ajoute un call à la liste des données enregistrées -> qui seront envoyées à la page de resultats
  addPaperToList(call: CallForPaper){
    this.resultatDeRechercheService.callForPapers.push(call);
  }


  // Ajoute un score de pertinence à la liste des données enregistrées -> qui seront envoyées à la page de resultats
  addAccuracyToList(value: number){
    this.resultatDeRechercheService.accuracy.push(value);
  }

  // Reset le tableau de data après l'affichage des résultats
  ResetPaperAbstract(){
    this.resultatDeRechercheService.callForPapers = new Array<CallForPaper>();
    this.resultatDeRechercheService.accuracy = new Array<number>();
  }

  //#############################################################################################
  //
  // TEST : CREATION DE DONNEES FICTIVES

  getFakeData(): CallForPaper{
    let call =  new CallForPaper();
    call.id = 0;
    call.title = "Special Issue: Digital technologies as ageing population policy-supportive tool. Towards Responsible Ageing Population Policy concept";
    call.deadline = new Date();
    call.desc = "The aim of this special issue is to broader our understanding of various aspects of ageing societies in the context of the digital revolution. The major focus is put on emerging age-based digital divides that are also detectable in labour market, violated – due to broad technology deployment – citizenship empowerment and inclusion, state policies and action undertaken to ensure senior citizens support through ICT-based networks. We put much emphasis on digital technologies (ICT) as an opportunity-enabling tool for elder people, that helps to design state policies aiming to reduce vulnerability of ageing societies prone to fast technological developments being out of their scope, reduce being at risk of digital exclusion and support digitally-based solution for social wealth creation or e-health solutions supporting traditional health-care system. Our approach may help to build fundamentals for “responsible ageing population policy” concept where digital technologies are central tool supporting state policies.";
    call.url = "https://www.google.fr/";
    call.fk_revue = 2;    

    return call;
  }

  getFakeData2(): CallForPaper{
    let call =  new CallForPaper();
    call.id = 1;
    call.title = "Special issue: Innovation in 5G technology: leadership, competition and policy issues";
    call.deadline = new Date();
    call.desc = "It is timely to publish a special issue on these topics in Telecommunications Policy, which has published seminal papers on the implications of 5G networks, the spectrum access and auction, all themes relevant for both scholars, policy makers and practitioners. We believe that an assessment of the leadership of the 5G development, the actual competition and the related policy issues, can yield new theoretical and empirical insights on 5G development.";
    call.url = "https://www.google.fr/";
    call.fk_revue = 1;    

    return call;
  }
}
