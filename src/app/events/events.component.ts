import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {getEventsList, getEventsState, State, getModalState} from "../core/store/index";
import {EventsInterface} from "../core/sdk/models/Events";
import {Observable, Subscription} from "rxjs";
import {EventsState} from "../core/store/reducers/events";

import * as events from '../core/store/actions/events.action';
import {ToInitialAction} from "../core/store/actions/common.action";
import {Modal} from "ngx-modal";
import {ModalState} from "../core/store/reducers/modal";
import {ToogleModalAction} from "../core/store/actions/modal.action";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, OnDestroy {

  public eventsState$: Observable<EventsState> = this.store.select(getEventsState);
  public eventsList$: Observable<EventsInterface[]> = this.store.select(getEventsList);
  public modalState$: Observable<ModalState> = this.store.select(getModalState);

  public searchStr: string = null;

  constructor(private store: Store<State>) {
    this.eventsList$.subscribe(n => console.log(n));
  }
  public subsrc: Subscription;

  @ViewChild('modal')
  public modal: Modal;


  ngOnInit() {
    this.onScroll();

    this.subsrc = this.modalState$
      .map(state => state.showed)
      .subscribe(show => {
        if(show){
          this.modal.open();
        }else {
          this.modal.close();
        }
      });
  }

  ngOnDestroy(){
    this.store.dispatch(new ToInitialAction());
  }

  onScroll(){
    this.store.dispatch(new events.UpdateFilterAndfetchAction({skip: null}));
  }

  onViewDetail(data){
    this.store.dispatch(new ToogleModalAction({
      showed: true,
      type: 'news-detail',
      data
    }))
  }

  onClose(){
    this.store.dispatch(new ToogleModalAction({
      showed: false,
      type: 'news-detail',
    }))
  }


  onInputChange(data){
    this.searchStr = data;
  }
}
