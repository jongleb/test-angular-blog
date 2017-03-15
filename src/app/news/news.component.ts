import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {State, getEntitiesState, getNewsState, getNewsList, getModalState} from "../core/store/index";
import {Store} from "@ngrx/store";

import * as news from '../core/store/actions/news.action';
import {Observable, Subscription} from "rxjs";
import {EntitiesState} from "../core/store/reducers/entities";
import {NewsState} from "../core/store/reducers/news";
import {NewsInterface} from "../core/sdk/models/News";
import {ToogleModalAction} from "../core/store/actions/modal.action";
import {ModalState} from "../core/store/reducers/modal";
import {Modal} from "ngx-modal";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {

  public entities$: Observable<EntitiesState> = this.store.select(getEntitiesState);
  public newsState$: Observable<NewsState> = this.store.select(getNewsState);
  public newsList$: Observable<NewsInterface[]> = this.store.select(getNewsList);
  public modalState$: Observable<ModalState> = this.store.select(getModalState);

  public searchStr: string = null;

  public subsrc: Subscription;

  @ViewChild('modal')
  public modal: Modal;

  ngOnDestroy(){
    this.subsrc.unsubscribe();
  }

  constructor(private store: Store<State>) {

  }

  ngOnInit() {
    this.store.dispatch(new news.FetchNewsAction());

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

  onInputChange(data){
    this.searchStr = data;
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

}
