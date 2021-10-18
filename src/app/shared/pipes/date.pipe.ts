import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs'


@Pipe({
  name: 'shortDate'
})
export class ShortDatePipe implements PipeTransform {

  transform(value: number | null | undefined, ...args: unknown[]): unknown {
    if(!value) return '';
    return dayjs(value).format('MM/DD/YYYY');
  }

}
