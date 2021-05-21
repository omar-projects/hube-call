import { Component, OnInit, ViewChild } from '@angular/core';
import { Revue } from 'src/app/models/revue';
import { RevueService } from 'src/app/services/revue.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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
  displayedColumns: string[] = ['accuracy', 'title', 'journal', 'description','deadline','SJR'];

  // Tableau de données lié au tableau, ici les Calls for Paper, déclaré à un tableau vide
  dataSource = new MatTableDataSource([]);

  // OpenAcces d'un call
  openAccess: string;

  // Liste de toutes les revues
  revueList: Array<Revue>;

  // Liste des data retournées
  calls : Array<CallForPaper>;
  accuracy: Array<number>;

  result : Array<{accuracy : number, call : CallForPaper}>;

  // Spécificité Angular Material pour le tri et la pagination d'un tableau
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  //Le contructeur récupère les données passées depuis la page de recherche et les converties en MatTableDataSource pour les afficher
  constructor(public dialog: MatDialog, private resultatDeRechercheService: ResultatDeRechercheService, private revueService: RevueService) {
    this.result = new Array<{accuracy : number, call : CallForPaper}>();

    this.calls = this.getCallForPaperResult();
    this.accuracy = this.getCallForPaperAccuracy();

    if(this.calls != undefined){
      for (let index = 0; index < this.calls.length; index++){
        this.result.push({ accuracy : this.accuracy[index], call : this.calls[index] });
      }
  
      this.dataSource = new MatTableDataSource(this.result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  ngOnInit(): void {
    this.revueService.getRevues().subscribe((res => {
      this.revueList = res;
    }));
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
    getCallForPaperResult(): Array<CallForPaper>{
      return this.resultatDeRechercheService.callForPapers;
    }

    // Récupère les pertinences des résultats de la recherche précédente
    getCallForPaperAccuracy(): Array<number>{
      return this.resultatDeRechercheService.accuracy;
    }
}
