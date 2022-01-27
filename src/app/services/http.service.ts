import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class httpService {
  constructor(private _http: HttpClient) {}

  apiData(url: string): Observable<any> {
    return this._http.get(url);
  }
}
