import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {CV} from './cv';
import 'rxjs/add/operator/map';

@Injectable()
export class CVService{
  constructor(private http: Http){}

}