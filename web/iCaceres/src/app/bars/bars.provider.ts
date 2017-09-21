import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Bar } from './bar';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class BarsProvider {

  constructor(private http: Http) { }

  getBars(): Observable<Bar[]> {
    return this.http.get(`${environment.baseUrl}/bar`).map(response => response.json().results as Bar[]);
  }
}
