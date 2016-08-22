import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {About} from './about';
import 'rxjs/add/operator/map';

@Injectable()
export class AboutService{
  constructor(private http: Http){}
  
  get(){
      return this.http.get('app/data/cv.json')
      .map(response => <About>function(r){ return r;  }(response.json()));
  }
  getSkills(){
      return this.http.get('app/data/cv.json')
      .map(response => <Object>response.json().skills);
  }
}