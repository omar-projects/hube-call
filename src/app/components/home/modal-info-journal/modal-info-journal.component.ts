import { Component, Inject } from '@angular/core';
import { Revue } from 'src/app/models/revue';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


/*
  Objet que nous passons au Dialog (Donner récupérable dans le modal-info-journal.html)
*/
export interface DialogData {
  revue: Revue;
  openAccess: string;
}

@Component({
  selector: 'app-modal-info-journal',
  templateUrl: './modal-info-journal.component.html',
  styleUrls: ['./modal-info-journal.component.css']
})
export class ModalInfoJournalComponent {

  constructor(public dialogRef: MatDialogRef<ModalInfoJournalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  // Méthode qui ferme le dialog
  onNoClick(): void {
    this.dialogRef.close();
  }

}
