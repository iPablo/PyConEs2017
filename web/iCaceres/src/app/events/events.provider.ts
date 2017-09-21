import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Event } from './event';
import { environment } from '../../environments/environment';

@Injectable()
export class EventsProvider {

  constructor(private http: Http) { }

  getEvents(): Observable<Event[]> {
    return this.http.get(`${environment.baseUrl}/event`).map(response => response.json().results as Event[]);
  }
}
