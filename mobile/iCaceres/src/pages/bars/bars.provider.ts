import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Bar } from './bar';
import { environment } from '../../app/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class BarsProvider {

  constructor(private http: Http) { }

  getBars(): Observable<Bar[]> {
    return this.http.get(`${environment.baseUrl}/bar`).map(response => response.json().results as Bar[]);
  }

  saveBar(bar: Bar): Observable<Bar> {
    return this.http.post(`${environment.baseUrl}/bar/`, bar).map(response => response.json().results as Bar);
  }

  getBar(barId: number): Observable<Bar> {
    return this.http.get(`${environment.baseUrl}/bar/${barId}`).map(response => response.json() as Bar);
  }
}