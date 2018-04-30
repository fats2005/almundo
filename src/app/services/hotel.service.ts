import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Hotel } from '../models/hotel'
import { HOTELS } from '../mock-hotels'

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class HotelService {

  private apiUrl = 'http://localhost:3000/api/Hotels'; // URL to web api

  private filterNameKeywordSource = new BehaviorSubject < string > ("");
  currentFilterNameKeyword = this.filterNameKeywordSource.asObservable();

  constructor(private http: HttpClient) {}

  /** GET hotels from the server */
  /** Filteres implemented in the same method */
  getHotels(filterNameKeyword: string): Observable < Hotel[] > {

    //Preparing the filter
    // See (https://loopback.io/doc/en/lb2/Where-filter.html)


    //TODO: Implement stars filters
    let filter: Object = {
      "where": {
        "and": [{
            "name": { "like": "%" + filterNameKeyword + "%" }
          }
          /*,
          {
            "stars": 2
          }*/
        ]
      }
    }

    return this.http.get < Hotel[] > (this.apiUrl + "?filter=" + encodeURI(JSON.stringify(filter)))
      .pipe(
        catchError(this.handleError('getHotels', []))
      );
  }

  getHotel(id: string): Observable < Hotel > {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get < Hotel > (url).pipe(
      catchError(this.handleError < Hotel > (`getHero id=${id}`))
    );
  }

  changeFilterNameKeyword(message: string) {
    this.filterNameKeywordSource.next(message)
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError < T > (operation = 'operation', result ? : T) {
    return (error: any): Observable < T > => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
