import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles/articles.service';
import { FilterPipe } from '../../pipes/filter/filter.pipe';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.css'
})
export class ArticlesListComponent implements OnInit {

  filteredArticle: string = '';
  articlesContent!: any[];

  constructor(public articlesService: ArticlesService) {}

  ngOnInit(): void {    

    /*
    this.articlesService.getAllArticles().subscribe(
      data => {
        this.articlesContent = data.results;
        console.log(this.articlesContent);
      }
    );    
    */

    this.articlesService.getArticles().subscribe(
      data => {
        this.articlesContent = data;
        console.log(this.articlesContent);
      }
    );
  }

  

}
