import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDate'
})
export class ConvertDatePipe implements PipeTransform {

  transform(timestamp: any): any {
    if (timestamp instanceof Date) {
      return timestamp;
    } 
    else {
      let date = new Date(timestamp.seconds*1000);       
      let convertedDate = 
        `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1).toString().padStart(2, "0")}.${date.getFullYear()}`
      return convertedDate;
    } 
    
  }

}
