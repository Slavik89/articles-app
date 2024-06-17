import { Component, OnInit } from '@angular/core';
import { Article } from '../../interfaces/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {

  article!: Article;

  ngOnInit(): void {   
    this.article = history.state.data;
  }

}
