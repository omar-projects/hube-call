import { Component, OnInit } from '@angular/core';
import { Revue } from 'src/app/models/revue';
import { MatDialog } from '@angular/material/dialog';
import { ModalInfoJournalComponent } from '../home/modal-info-journal/modal-info-journal.component';
import { ResultatDeRechercheService } from './resultat-de-recherche.service';
import { CallForPaper } from 'src/app/models/callForPaper';

@Component({
  selector: 'app-resultat-de-recherche',
  templateUrl: './resultat-de-recherche.component.html',
  styleUrls: ['./resultat-de-recherche.component.css']
})
export class ResultatDeRechercheComponent implements OnInit {

  // Nom des colonnes du tableau
  displayedColumns: string[] = ['title', 'journal', 'description','deadline','SJR'];

  // OpenAcces d'un call
  openAccess: string;

  // Liste de toutes les revues
  revueList: Array<Revue>;

  callForPapers: Array<CallForPaper>;

  constructor(public dialog: MatDialog, private resultatDeRechercheService: ResultatDeRechercheService) {
    this.callForPapers = new Array();
    this.callForPapers = this.getPaperAbstract();
    console.log(this.getPaperAbstract());
  }

  ngOnInit(): void {
  }


  // Méthode d'ouverture du Dialog
  openDialog(id: number): void {
    let revue = this.getRevueById(id);
    if(revue.isOpenAccess)
      this.openAccess = "Yes";
    else
      this.openAccess = "No";

    this.dialog.open(ModalInfoJournalComponent, {
      data: {revue: revue, openAccess: this.openAccess}
    });
  }

    // Retourne une revue en fonction de son id, utile car dans l'objet CallForPaper nous stockons une clé étrangère vers une révue qui correspond à l'id d'une revue
    getRevueById(id: number): Revue {
      for(var i = 0 ; i < this.revueList.length ; i++) {
        var temp = this.revueList[i];
        if(temp.id == id) {
          return temp;
        }
      }
    }

    // Récupère les résultats de la recherche précédente
    getPaperAbstract(): Array<CallForPaper>{
      return this.resultatDeRechercheService.callForPapers;
    }
}
