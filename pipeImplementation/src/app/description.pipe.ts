import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description',
})
export class DescriptionPipe implements PipeTransform {
  transform(value: string): string {
    let result: number = value.length;
    if (result >= 100) {
      console.log(value.substring(0, 100) + '...');
      value = value.substring(0, 100) + ' ...';
    }

    return value;
  }
}
