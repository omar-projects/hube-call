import { Injectable } from '@angular/core';
import { CallForPaper } from 'src/app/models/callForPaper';

@Injectable({
  providedIn: 'root'
})
export class ResultatDeRechercheService {

  callForPapers: Array<CallForPaper> = new Array<CallForPaper>();
    
}