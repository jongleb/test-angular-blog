import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {NewsInterface} from "../core/sdk/models/News";
import {Store} from "@ngrx/store";
import {State, getNewsList, getEventsList} from "../core/store/index";
import {EventsInterface} from "../core/sdk/models/Events";

import * as home from '../core/store/actions/home.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public newsList$: Observable<NewsInterface[]> = this.store.select(getNewsList);
  public eventsList$: Observable<EventsInterface[]> = this.store.select(getEventsList);

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new home.FetchAllDataAction());
  }

}
