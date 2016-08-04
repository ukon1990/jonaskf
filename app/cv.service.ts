import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {CV} from './cv';
import 'rxjs/add/operator/map';

@Injectable()
export class CVService{
  constructor(private http: Http){}
  
  get(){
      return this.http.get('app/data/cv.json')
      .map(response => <CV>function(r){ return r;  }(response.json()));
  }
  getSkills(){
      return this.http.get('app/data/cv.json')
      .map(response => <Object>response.json().skills);
  }
}