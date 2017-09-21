import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from './restaurant';
import { environment } from '../../app/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantsProvider {

  constructor(private http: Http) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get(`${environment.baseUrl}/restaurant`).map(response => response.json().results as Restaurant[]);
  }
}