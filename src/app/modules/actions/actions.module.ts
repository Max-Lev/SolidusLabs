import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsContainerComponent } from './actions-container/actions-container.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    ActionsContainerComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    ActionsContainerComponent,
    MatButtonModule,
    MatIconModule
  ]
})
export class ActionsModule { }
