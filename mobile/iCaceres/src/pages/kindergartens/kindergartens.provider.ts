import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../app/environment';
import 'rxjs/add/operator/map';
import { Kindergarten } from './kindergarten';

@Injectable()
export class KindergartensProvider {

  constructor(private http: Http) { }

  getKindergartens(): Observable<Kindergarten[]> {
    return this.http.get(`${environment.baseUrl}/kindergarten`)
               .map(response => response.json().results as Kindergarten[]);
  }
}