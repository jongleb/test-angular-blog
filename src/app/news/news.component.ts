import { Component, OnInit } from '@angular/core';
import {State, getEntitiesState, getNewsState, getNewsList} from "../core/store/index";
import {Store} from "@ngrx/store";

import * as news from '../core/store/actions/news.action';
import {Observable} from "rxjs";
import {EntitiesState} from "../core/store/reducers/entities";
import {NewsState} from "../core/store/reducers/news";
import {NewsInterface} from "../core/sdk/models/News";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public entities$: Observable<EntitiesState> = this.store.select(getEntitiesState);
  public newsState$: Observable<NewsState> = this.store.select(getNewsState);
  public newsList$: Observable<NewsInterface[]> = this.store.select(getNewsList);


  constructor(private store: Store<State>) {
    this.newsList$.subscribe(n => console.log(n));
  }

  ngOnInit() {
    this.store.dispatch(new news.FetchNewsAction());
  }
}
