import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunctionOutletRoutingModule } from './function-outlet-routing.module';
import { FunctionOutletComponent } from './function-outlet.component';


@NgModule({
  declarations: [FunctionOutletComponent],
  imports: [
    CommonModule,
    FunctionOutletRoutingModule
  ]
})
export class FunctionOutletModule { }
