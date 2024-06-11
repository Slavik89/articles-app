import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './services/articles/articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'articles-site';

  articlesContent!: any[];

}
