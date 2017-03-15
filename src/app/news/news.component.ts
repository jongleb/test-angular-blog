import { Component, OnInit } from '@angular/core';
import {State} from "../core/store/index";
import {Store} from "@ngrx/store";

import * as news from '../core/store/actions/news.action';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new news.FetchNewsAction());
  }
}
