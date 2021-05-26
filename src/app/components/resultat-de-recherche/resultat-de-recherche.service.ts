import { Injectable } from '@angular/core';
import { CallForPaper } from 'src/app/models/callForPaper';

@Injectable({
  providedIn: 'root'
})
export class ResultatDeRechercheService {

  // accuracy: Array<number>;
  callForPapers: Array<CallForPaper>;

}
