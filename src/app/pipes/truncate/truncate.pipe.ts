import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  // A pipe that truncates the text in the description to 1000 characters in this case
  transform(text: string, limit: number = 500): string {
    if (!text) {
      return '';
    }
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }

}
