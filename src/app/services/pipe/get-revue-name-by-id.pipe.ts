import { Pipe, PipeTransform } from '@angular/core';
import { RevueService } from '../revue.service';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'getRevueNameById'
})
export class GetRevueNameByIdPipe implements PipeTransform {

  constructor(private revueService: RevueService) {

  }

  transform(value: number, ...args: any[]): any {
    return this.getRevueNameById(value);
  }

  getRevueNameById(id: number) {
    console.info("---getRevueNameById---");
    return this.revueService.getRevueById(id).pipe(
      map((value) => value[0].name)
    )
  }
}
