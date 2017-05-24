import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  data: any;

  constructor(private http: Http) {
    http.get('/api/articles.json')
      .subscribe(res => {
        this.data = res.json();
      });
  }

  deleteArticle(item) {
    const idx = this.data.indexOf(item);
    this.data.splice(idx, 1);
  }
}
