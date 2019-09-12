import {Passenger} from "./models/passenger.interface";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {

  // to use Http we need to import Injectable
  constructor(private http: Http) {
    console.log(this.http);
  }

  // at the moment we get passenger array from service getPassenger method
  // later on we put the data into db json file which act as API
  getPassenger(): Observable<Passenger[]> {
    return this.http.
      get(PASSENGER_API).
      map((response: Response) => response.json()).
      catch((error: any) => Observable.throw(error.json()));
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {

    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let options = new RequestOptions({
      headers: headers
    });

    return this.http.put(`${PASSENGER_API}/${passenger.id}`, passenger, options).
      map((response: Response)=> response.json()).
      catch((error: any) => Observable.throw(error.json()));
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.delete(`${PASSENGER_API}/${passenger.id}`).
      map((response: Response)=> {
        return response.json();
    }).catch((error: any) => {
      return Observable.throw(error.json());
    });
  }
}
