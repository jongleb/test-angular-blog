import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'simple-list-body-content',
  template: `<ng-content></ng-content>`
})
export class BodyContentComponent {

}

@Component({
  selector: 'core-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.css']
})
export class SimpleListComponent implements OnInit {

  @Input()
  public list: any[] = [];

  @Input()
  public size: string = 'col-lg-4';

  @Output()
  public onViewDetail: EventEmitter<any> = new EventEmitter();

  viewDetail(item){
    this.onViewDetail.emit(item);
  }

  constructor() { }

  ngOnInit() {
  }

}
