import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {Project} from './project';
import {ProjectService} from './project.service';

@Component({
  selector: 'projects',
  templateUrl: 'app/templates/projects.html',
  styleUrls:[],
  directives: [NgClass],
  providers: [ProjectService]
})

export class ProjectComponent{
  projects = {};
  technologyFilter: string[] = [];

  constructor(private projectService: ProjectService){}
  ngOnInit(): void{
    this.projects = this.projectService.getProjects()
      .subscribe(
        projects => this.projects = projects,
        error => console.log(error)
      );
  }

  setFilter(tech: string): void{
    if(this.technologyFilter.indexOf(tech) === -1){
      this.technologyFilter.push(tech);
    }else{
      //Getting the items index and removing it from the filter
      this.technologyFilter.splice( this.technologyFilter.indexOf(tech, 0), 1);
    }
  }
  //Checking if a project matches a given tag
  matchFilter(a: string[]): string{
    let match: boolean = false;
    if(this.technologyFilter.length !== 0){
      for(let i of a){
        if(this.technologyFilter.indexOf(i) !== -1){
          match = true;
          break;
        }
      }
    }else{
      match = true;
    }
    return match;
  }

  arrayToString(arr): string{
    let str = '';
    for(let i = 0, x = arr.length; i < x; i++){
      if(i == 0){
        str += arr[i];
      }else if(i == x - 1){
        str += ' & ' + arr[i];
      }else{
        str += ', ' + arr[i];
      }
    }
    return str;
  }
}
