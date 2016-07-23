import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Download} from './download'
import 'rxjs/add/operator/map';

@Injectable()
export class DownloadService{
  constructor(private http: Http){}

  getDownloads(){
    return this.http.get('app/data/downloads.json')
      .map(response => <Download[]>function(r){ return r;  }(response.json()));
  }
}
