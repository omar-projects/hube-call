import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { CallForPaperService } from 'src/app/services/call-for-paper.service';
import { RevueService } from 'src/app/services/revue.service';
import { map } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Revue } from 'src/app/models/revue';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ModalInfoJournalComponent } from './modal-info-journal/modal-info-journal.component';
import { Editeur } from 'src/app/models/editeur';
import { EditeurService } from 'src/app/services/editeur.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Nom des colonnes du tableau
  displayedColumns: string[] = ['title', 'journal', 'description','deadline','SJR'];

  // Tableau de données lié au tableau, ici les Calls for Paper, déclaré à un tableau vide
  dataSource = new MatTableDataSource([]);

  // OpenAcces d'un call
  openAccess: string;

  // Liste de toutes les revues
  revueList: Array<Revue>;

  // Liste des editeurs
  editeurList: Array<Editeur>;

  // Formulaire de triage par rang
  checkoutForm: FormGroup;

  // Spécificité Angular Material pour le tri et la pagination d'un tableau
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // Création du formulaire
  constructor(
    private callService: CallForPaperService, 
    private revueService: RevueService, 
    private editeurService: EditeurService,
    public dialog: MatDialog, 
    private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      rank: ['', Validators.required],
      editeur: ['', Validators.required]
    })
  }

  // Récupération des données via les appels API du service de Revue et CallsForPaper
  ngOnInit(): void {
    this.callService.getCalls().subscribe((res)=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    
    this.revueService.getRevues().subscribe((res => {
      this.revueList = res;
    }));

    this.editeurService.getEditeurs().subscribe((res) => {
      this.editeurList = res;
    });

    this.checkoutForm.value.rank = "none";

    this.dataSource.filterPredicate = (data, filter) => 
        data.journal.name.trim().toLowerCase().indexOf(filter) !== -1 ||
        data.title.trim().toLowerCase().indexOf(filter) !== -1 ||
        data.description.trim().toLowerCase().indexOf(filter) !== -1;
  }

  // Filtre les calls en fonction de leur rank et/ou de leur editeur
  onSubmitQuickSearch() {
    this.callService.getCallsByRank(this.checkoutForm.value.rank).subscribe((calls)=>{

      if(this.checkoutForm.value.editeur !== "all") {
        // On filtre le resultat avec les calls appartenant à l'éditeur selectionné
        calls = calls.filter((call) => {
          let revueDuCall: Revue = this.getRevueById(call.fk_revue);
          return revueDuCall.fk_editeur === this.checkoutForm.value.editeur;
        });
      }

      this.dataSource = new MatTableDataSource(calls);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
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

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Get le nom d'une revue par son ID
  getRevueNameById(id: number) {
    return this.revueService.getRevueById(id).pipe(
      map((value) => value[0].name)
    )
  }

  // Get le widget de la revue en fonction de son id
  getRevueWidgetById(id: number) {
    return this.revueService.getRevueById(id).pipe(
      map((value) => value[0].sjr)
    )
  }
}


