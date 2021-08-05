import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { IEvents } from '../models/events.model';

@Injectable({
  providedIn: 'root'
})
export class GetEventsService {

  constructor(private http: HttpClient) { };

  getEvents$(): Observable<IEvents[]> {
    // return this.http.get<IEvents[]>(environment.eventsUrl)
    return this.http.get<IEvents[]>('http://localhost:3000');
  }

  setTodoItem():Observable<any> {
    return this.http.post('http://localhost:3000/items', { name: 'TODO Docker', completed: true });
  }
}
