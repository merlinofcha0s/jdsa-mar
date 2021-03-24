import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleVinylComponent } from './single-vinyl.component';

describe('SingleVinylComponent', () => {
  let component: SingleVinylComponent;
  let fixture: ComponentFixture<SingleVinylComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleVinylComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleVinylComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
