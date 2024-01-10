import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunctionOutletComponent } from './function-outlet.component';

const routes: Routes = [{path: '', component: FunctionOutletComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunctionOutletRoutingModule { }
