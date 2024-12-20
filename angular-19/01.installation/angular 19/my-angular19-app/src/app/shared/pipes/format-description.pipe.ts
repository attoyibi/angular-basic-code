import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDescription'
})
export class FormatDescriptionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
