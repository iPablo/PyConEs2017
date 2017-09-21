import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from './restaurant';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class RestaurantsProvider {

  constructor(private http: Http) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get(`${environment.baseUrl}/restaurant`).map(response => response.json().results as Restaurant[]);
  }
}
