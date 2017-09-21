import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { School } from './school';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class SchoolsProvider {

  constructor(private http: Http) { }

  getSchools(): Observable<School[]> {
    return this.http.get(`${environment.baseUrl}/school`).map(response => response.json().results as School[]);
  }
}
