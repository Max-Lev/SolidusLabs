import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Subject } from 'rxjs/internal/Subject';
import * as socket from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SocketIOService {

  private socket = socket.io(environment.socketIO);
  // :any;//:socket.Socket<DefaultEventsMap, DefaultEventsMap>
  //  = socket.io();

  constructor() {


  }

  connection() {

    // this.socket = socket.io(environment.socketIO);

    this.socket.on("connection", (arg: any) => {
      debugger;
      console.log(arg);

    });
  };

  sendEvent() {
    this.socket.emit('Greeting', { msg: 'Holla' });
  };

  sendEventResponse$(): Observable<any> {

    const sub$: Subject<any> = new Subject();

    this.socket.on("hello", (arg: any) => {
      debugger;
      console.log(arg);
      sub$.next(arg);
    });

    return sub$;

  };

}
