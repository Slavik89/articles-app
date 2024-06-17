import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles/articles.service';
import { Article } from '../../interfaces/article';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.css'
})
export class ArticlesListComponent implements OnInit {

  filteredArticle: string = '';
  articlesContent!: Article[];

  constructor(public articlesService: ArticlesService) {}

  ngOnInit(): void { 
    
    // Getting data about articles from the Firebase
    this.articlesService.getArticles().subscribe(
      data => {
        this.articlesContent = data;
      }
    );
  }

  

}
