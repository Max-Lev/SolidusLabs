import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IEvents } from '../models/events.model';
import { GetEventsService } from '../services/get-events.service';

@Component({
  selector: 'app-foundations-container',
  templateUrl: './foundations-container.component.html',
  styleUrls: ['./foundations-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoundationsContainerComponent implements OnInit {

  ITEM_SIZE = 50;

  dataSource:IEvents[]= [];

  offset: number | undefined;

  visibleColumns = ["timestamp", "price", "status","snapshot"];

  constructor(private getEventsService:GetEventsService) { }

  ngOnInit(): void {
    this.getEventsService.getEvents$().subscribe((response:IEvents[])=>{
      console.log(response);
      this.dataSource = response;
    })
  }

  onTableScroll($event: any){
    console.log($event);
  }

}
