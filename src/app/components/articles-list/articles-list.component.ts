import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles/articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.css'
})
export class ArticlesListComponent implements OnInit {

  articlesContent!: any[];
  articlesFirebase!: any[];

  constructor(public articlesService: ArticlesService) {}

  ngOnInit(): void {    
    this.articlesService.getAllArticles().subscribe(
      data => {
        this.articlesContent = data.results;
        console.log(this.articlesContent);
      }
    );    

    this.articlesService.getArticles().subscribe(
      data => {
        this.articlesFirebase = data;
        console.log(this.articlesFirebase);
      }
    );
  }

  

}
