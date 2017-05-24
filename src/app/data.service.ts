import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  data: any;

  constructor(private http: Http) {
    http.get('http://localhost:3000/articles')
      .subscribe(res => {
        this.data = res.json();
      });
  }

  deleteArticle(item) {
    // const idx = this.data.indexOf(item);
    // this.data.splice(idx, 1);

    this.http.delete('http://localhost:3000/articles/' + item.id)
      .subscribe(res => {
        if (res.status === 200) {
          this.http.get('http://localhost:3000/articles')
            .subscribe(re => {
              this.data = re.json();
            });
        }
      });
  }
}
