import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Shop } from './shop';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class ShopsProvider {

  constructor(private http: Http) { }

  getShops(): Observable<Shop[]> {
    return this.http.get(`${environment.baseUrl}/shop`).map(response => response.json().results as Shop[]);
  }
}
