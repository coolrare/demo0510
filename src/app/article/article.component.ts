import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';

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

  constructor(private datasvc: DataService) { }

  ngOnInit() {
  }

  deleteArticle() {
    this.delete.emit(this.item);
  }

}
