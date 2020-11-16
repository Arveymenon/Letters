import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Http, Headers } from '@angular/http'; 
import { map } from 'rxjs/operators';

import { environment } from './../../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url = 'BasePath';
  private headers =
    new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })

  constructor(private http: HttpClient) { }

  get(apiEndPoint){
      console.log(this.url+apiEndPoint)
      return this.http.get(this.url+apiEndPoint,{ headers: this.headers })
  }

  post(apiEndPoint, body){
      console.log(this.url+apiEndPoint)
      console.log(body)
      return this.http.post(this.url+apiEndPoint, body, { headers: this.headers })
  }

  // call(method, apiEndPoint, body?: any) {
  //   console.log(apiEndPoint);
  //   // const url = 'https://schooby-env.ejmqritgxz.us-east-2.elasticbeanstalk.com/' + apiEndPoint;
  //   const url = 'http://localhost:8888/book_shop_backend/' + apiEndPoint;
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //   });
  //   return new Promise((resolve, reject) => {

  //     switch(method) {
  //       case 'get': {
  //         console.log(url)
  //         this.http.get(url, { headers })
  //         .subscribe((data) => {
  //           resolve(data);
  //         },
  //         (error) => {
  //           reject(error);
  //         },
  //       );
  //         break;
  //       }
  //       case 'post': {
  //         this.http.post(url, body, { headers })
  //         .subscribe((data) => {
  //           resolve(data);
  //         },
  //         (error) => {
  //           reject(error);
  //           },
  //         );
  //         break;
  //       }
  //       case 'put': {
  //         this.http.put(url, body, { headers })
  //           .subscribe((data) => {
  //             resolve(data);
  //           },
  //           (error) => {
  //             reject(error);
  //             },
  //           );
  //         break;
  //       }
  //       case 'delete': {
  //         this.http.delete(url, { headers })
  //           .subscribe((data) => {
  //             resolve(data);
  //           },
  //           (error) => {
  //             reject(error);
  //             },
  //           );
  //         break;
  //       }
  //       default: {
  //          console.log('method not defined');
  //          reject('method not defined');
  //          break;
  //       }
  //    }
  //   });
  // }
}
