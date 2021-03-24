import {Component, Input, OnInit} from '@angular/core';
import {Vinyl} from '../vinyl.model';

@Component({
  selector: 'app-single-vinyl',
  templateUrl: './single-vinyl.component.html',
  styleUrls: ['./single-vinyl.component.scss']
})
export class SingleVinylComponent implements OnInit {

  @Input()
  public vinyl: Vinyl;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeArtiste(): void {
    this.vinyl.artiste = 'King of pop';
  }

  changeReleaseDate(newReleaseDate: number): void {
    this.vinyl.releaseDate = newReleaseDate;
  }
}
