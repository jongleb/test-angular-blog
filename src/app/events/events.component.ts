import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {getEventsList, getEventsState, State} from "../core/store/index";
import {EventsInterface} from "../core/sdk/models/Events";
import {Observable} from "rxjs";
import {EventsState} from "../core/store/reducers/events";

import * as events from '../core/store/actions/events.action';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public eventsState$: Observable<EventsState> = this.store.select(getEventsState);
  public eventsList$: Observable<EventsInterface[]> = this.store.select(getEventsList);

  public searchStr: string = null;

  constructor(private store: Store<State>) {
    this.eventsList$.subscribe(n => console.log(n));
  }

  ngOnInit() {
    this.onScroll();
  }

  onScroll(){
    this.store.dispatch(new events.UpdateFilterAndfetchAction({skip: null}));
  }

  onInputChange(data){
    this.searchStr = data;
  }
}
