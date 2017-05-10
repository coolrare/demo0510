import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  item;

  @Output()
  delete = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  deleteArticle() {
    this.delete.emit(this.item);
  }

}
