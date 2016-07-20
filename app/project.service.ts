import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Project} from './project'
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService{
  constructor(private http: Http){}

  getProjects(){
    return this.http.get('app/data/projects.json')
      .map(response => <Project[]>function(r){
        let tags = [];
        let projects = r.projects.sort(function(a, b){
          return a.year < b.year;
        });
        for(let p of r.projects){
          for(let t of p.technologies){
            if(tags.indexOf(t) == -1 ){
              tags.push(t);
            }
          }
        }
        console.log(tags);
        r.technologies = tags;
        r.projects = projects;
        return r;
      }(response.json()));
  }

}
