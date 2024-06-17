import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], typedText: string) {

    // A condition that works for the list of articles before starting the search   
    if (value === undefined || typedText === '') {
      return value;
    }

    // A variable that collects the list of articles that match the search
    const articles = [];

    // Text match search in the title
    for (const article of value) {

      if (article.title.toLowerCase().includes(typedText.toLowerCase())) {
        articles.push(article);
      }
    }

    // Text match search in the description
    for (const article of value) {

      if (article.description.toLowerCase().includes(typedText.toLowerCase())) {
        articles.push(article);
      }
    }
    
    return articles;
  }



}
