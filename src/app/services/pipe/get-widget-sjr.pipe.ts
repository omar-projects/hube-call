import { Pipe, PipeTransform } from '@angular/core';
import { RevueService } from '../revue.service';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'getWidgetSjr'
})
export class GetWidgetSjrPipe implements PipeTransform {

  constructor(private revueService: RevueService) {}

  transform(value: number, ...args: any[]): any {
    return this.getRevueWidgetById(value);
  }

  getRevueWidgetById(id: number) {
    return this.revueService.getRevueById(id).pipe(
      map((value) => value[0].sjr)
    )
  }
}
