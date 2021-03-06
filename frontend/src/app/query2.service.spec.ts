import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Query1Service {
  uri = 'http://localhost:4003/query2';

  constructor(private http: HttpClient) { }

  q2() {
    const obj = 1;
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
}