import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoundationsContainerComponent } from './foundations-container/foundations-container.component';
import { FoundationsRoutingModule } from './foundations-routing.module';
import { ActionsModule } from '../actions/actions.module';
import { CdkTableModule } from '@angular/cdk/table';
// import { HttpClientModule } from '@angular/common/http';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { MatTableModule } from '@angular/material/table';
import { SocketIOService } from './socketIO/socket-io.service';
// import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  declarations: [
    FoundationsContainerComponent,
  ],
  imports: [
    CommonModule,
    FoundationsRoutingModule,
    ActionsModule,
    CdkTableModule,
    // HttpClientModule,
    // CdkVirtualScrollViewport,
    MatTableModule,
    ScrollingModule,
  ],
  exports: [
    FoundationsContainerComponent,
    ActionsModule,
    // CdkVirtualScrollViewport,
    MatTableModule,
    ScrollingModule,
    CdkTableModule
  ],
  providers: [
    SocketIOService
  ]
})
export class FoundationsModule { }
