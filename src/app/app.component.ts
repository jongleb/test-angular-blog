import {Component, ViewContainerRef} from '@angular/core';
import {Store} from "@ngrx/store";
import {getModalState, State} from "./core/store/index";
import {ModalState} from "./core/store/reducers/modal";
import {Observable} from "rxjs";
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { Overlay, OverlayRenderer } from 'angular2-modal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public modalState$: Observable<ModalState> = this.store.select(getModalState);

  public searchStr: string = null;


  constructor(private store: Store<State>) {

    this.modalState$.subscribe(change => {console.log(change)});

  }

}
