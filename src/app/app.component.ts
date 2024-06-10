import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './services/articles/articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'articles-app';

  constructor(public articlesService: ArticlesService) {}

  ngOnInit(): void {    
    this.articlesService.getAllArticles().subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
