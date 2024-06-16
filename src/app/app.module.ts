import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleComponent } from './components/article/article.component';
import { RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app-routing.module'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from './../environment/firebase.config';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ConvertDatePipe } from './pipes/convert-date/convert-date.pipe';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    ArticleComponent,
    PageNotFoundComponent,
    FilterPipe,
    TruncatePipe,
    ConvertDatePipe
  ],
  imports: [
    BrowserModule,    
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
