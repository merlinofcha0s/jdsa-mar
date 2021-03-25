import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-counting-buttons',
  templateUrl: './counting-buttons.component.html',
  styleUrls: ['./counting-buttons.component.scss']
})
export class CountingButtonsComponent implements OnInit {

  @Input()
  private releaseDate: Date;

  @Output()
  private releaseDateChange = new EventEmitter<Date>();

  constructor() {
  }

  ngOnInit(): void {
  }

  incValue(): void {
    const year = this.releaseDate.getFullYear();
    this.releaseDate.setFullYear(year + 1);
    this.releaseDateChange.emit(this.releaseDate);
  }

  decValue(): void {
    const year = this.releaseDate.getFullYear();
    this.releaseDate.setFullYear(year - 1);
    this.releaseDateChange.emit(this.releaseDate);
  }
}
