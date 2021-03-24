import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-counting-buttons',
  templateUrl: './counting-buttons.component.html',
  styleUrls: ['./counting-buttons.component.scss']
})
export class CountingButtonsComponent implements OnInit {

  @Input()
  private releaseDate: number;

  @Output()
  private releaseDateChange = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  incValue(): void {
    this.releaseDate++;
    this.releaseDateChange.emit(this.releaseDate);
  }

  decValue(): void {
    this.releaseDate--;
    this.releaseDateChange.emit(this.releaseDate);
  }
}
