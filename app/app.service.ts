import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Http,Response} from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
require('rxjs/add/operator/map');

@Injectable()
export class AppServices  {  
    private _url : string = "./app/appdata.json";
   options: RequestOptions;
  private headers: Headers;
  private actionUrl: string;
    
   Response :response ;
     private _url1 : string = 'https://maps.googleapis.com/maps/api/geocode/json?address=chennai&key=AIzaSyCZnkgwsuvs6eaFcJSlN1ig2SrSVWyO_KI';
    //	private _url1 : string =  'http://date.jsontest.com/';
    constructor(private _http:Http)
    {   
    }
    
 
   readLocation() {
    // return [{"id":1},{"id":2}];
    //return this._http.get(this._url1).map(res => res.json()).catch(this.handleError);
   }
  
    getAstroInfo()
    {
      //return [{"id":1},{"id":2}];
      console.log("came to service");
      return this._http.get(this._url1, this.options).map(response => response.json()).catch(this.handleError);
      // const headers = new Headers();
      // headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
   //    return this._http.get(this._url).map(this.extractData).catch(this.handleError);
    }
  
      private extractData(res: Response) {
          let body = res.json();
          //return body || {};
          return JSON.parse(JSON.stringify(body || null ))
        
      }
       
  private handleError(error: any) {
    console.log('Yup an error occurred', error);
    return Observable.throw(error.message || error);
}
}
 
