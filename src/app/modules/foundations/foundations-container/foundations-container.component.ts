import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling/virtual-scroll-viewport';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, AfterViewChecked, AfterViewInit } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { IEvents } from '../models/events.model';
import { GetEventsService } from '../services/get-events.service';
import { SocketIOService } from '../socketIO/socket-io.service';

@Component({
  selector: 'app-foundations-container',
  templateUrl: './foundations-container.component.html',
  styleUrls: ['./foundations-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoundationsContainerComponent implements OnInit, AfterViewInit {

  ITEM_SIZE = 50;

  dataSource: IEvents[] = [];

  offset: number | undefined;

  visibleColumns = ["timestamp", "price", 'status'];

  @ViewChild('table') table!: MatTable<any>;

  @ViewChild('viewPort') viewPort!: CdkVirtualScrollViewport;

  constructor(private getEventsService: GetEventsService,
    private cd: ChangeDetectorRef,
    private socketIOService: SocketIOService) { }

  ngOnInit(): void {
    this.getEvents$();

    this.socketIOService.connection();

    setTimeout(() => {
      this.socketIOService.sendEvent();
    }, 2000);

    this.socketIOService.sendEventResponse$().subscribe(d=>console.log(d))

    // this.getEventsService.setTodoItem().subscribe(item => console.log(item));
  }

  ngAfterViewInit(): void {
    // console.log(this.table)
    // console.log(this.viewPort)
  }

  getEvents$(): void {
    this.getEventsService.getEvents$().subscribe((response: IEvents[]) => {
      console.log(response);
      this.dataSource = response;
      this.cd.detectChanges();
    });
  }

  selectedRow(row: IEvents, rowIndex?: number) {
    console.log(row, rowIndex)
  }

}
