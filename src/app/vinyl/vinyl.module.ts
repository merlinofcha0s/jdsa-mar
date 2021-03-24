import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SingleVinylComponent} from './single-vinyl/single-vinyl.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [SingleVinylComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [SingleVinylComponent],
})
export class VinylModule {
}
