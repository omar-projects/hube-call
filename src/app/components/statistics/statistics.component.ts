import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';
import { MatTableDataSource } from '@angular/material/table';
import { Revue } from 'src/app/models/revue';
import { RevueService } from 'src/app/services/revue.service';
import { EditeurService } from 'src/app/services/editeur.service';
import { CallForPaperService } from 'src/app/services/call-for-paper.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { ModalInfoJournalComponent } from 'src/app/components/home/modal-info-journal/modal-info-journal.component';
import { element } from 'protractor';

@Component({
  selector: 'app-stats',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent implements OnInit {

  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
  };

  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // Nombre de call par editeur
  callByEditeur = [];

  // Nombre call par mois
  callByMonth = [];

  // Couleurs des élements des graphiques de la page statistiques
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // Variable de construction des tuiles de la page stats
  masonryStats = [];
  limit = 15;

  // Nom des colonnes du tableau
  displayedColumns: string[] = ['revue', 'nbCall'];

  // Tableau de données lié au tableau, ici les Calls for Paper, déclaré à un tableau vide
  dataSource = new MatTableDataSource([]);

  // OpenAcces d'un call
  openAccess: string;

  // Liste de toutes les revues
  revueList: Array<Revue>;

  // Liste du nombre call 
  nbCallList: number[] = [];

  // Option du graph du nombre de call par mois 
  xAxisLabelCallByMonth = 'Month';
  yAxisLabelCallByMonth = 'Number of call';

  constructor(
    private revueService: RevueService,
    private editeurService: EditeurService,
    private callService: CallForPaperService,
    public dialog: MatDialog
  ){}

  // Récupération des données via les appels API des services
  ngOnInit() {

    // Récupération des revue selon le services
    this.revueService.getRevues().subscribe((revueList => {
      this.revueList = revueList;
      this.revueList.forEach( element =>{
        this.callService.getNbCallByRevue(element.id).subscribe((number => {
          let model = { 'revue' : element, 'nbCall' : number};
          const data = this.dataSource.data;
          data.push(model);
          this.dataSource.data = data;
        }));
      });
    }));

    // Récupéraion des infos concernant le nombre de calls par Editeurs
    this.editeurService.getNbCallByEditeur().subscribe((models => {
      models.forEach(element => {
        let model = { 'name': element.name, 'value': Number(element.value)};
        const data = this.callByEditeur;
        data.push(model);
        this.callByEditeur = [...data];
      });
    }));

    // Récupération du nombre de call par mois 
    this.callService.getNbCallByMonth().subscribe((models => {
      models.forEach(element => {
        let model = { 'name': element.month, 'value': Number(element.number)};
        const data = this.callByMonth;
        data.push(model);
        this.callByMonth = [...data];
      });
    }));

    this.dataSource.filterPredicate = (data, filter) => data.revue.name.trim().toLowerCase().indexOf(filter) !== -1;
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

  // Métode d'Angular Material pour le filtre sur les données via le champ prévu à cet effet
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
