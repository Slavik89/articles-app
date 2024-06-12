import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient, public firestore: Firestore) { }

  getAllArticles(): Observable<any> {
    return this.http
            .get<any>('https://api.spaceflightnewsapi.net/v4/articles/');
  }

  getArticles() {
    const articlesCollection = collection(this.firestore, 'articles');
    return collectionData(articlesCollection, {idField: 'id'}) as Observable<any[]>;;
  }

}


