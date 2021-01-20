import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddItemAction } from './store/actions/item.action';
import { AppState } from './store/models/app-state.model';
import { Item } from './store/models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  items : Observable<Array<Item>>;
  constructor(private store : Store<AppState>){}
  ngOnInit(){
    this.items = this.store.select(s => s.items);
    console.log(this.items);
    setTimeout(() => this.addItem(), 2000);
  }

  addItem(){
    this.store.dispatch(new AddItemAction({name:'balagi'}));
  }
}
