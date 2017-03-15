import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'core-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output()
  public onSearch: EventEmitter<any> = new EventEmitter();

  @Output()
  public onInputChange: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  search(text: string){
    this.onSearch.emit(text);
  }

  inputChange(text: string){
    this.onInputChange.emit(text);
  }
}
