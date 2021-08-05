import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoundationsContainerComponent } from './foundations-container/foundations-container.component';

const routes = [
  {
    path:'',component:FoundationsContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoundationsRoutingModule {
  constructor(){
    
  }
 }
