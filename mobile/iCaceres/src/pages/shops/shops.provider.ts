import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Shop } from './shop';
import { environment } from '../../app/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ShopsProvider {

  constructor(private http: Http) { }

  getShops(): Observable<Shop[]> {
    return this.http.get(`${environment.baseUrl}/shop`).map(response => response.json().results as Shop[]);
  }
}