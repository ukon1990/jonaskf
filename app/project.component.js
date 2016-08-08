"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const common_1 = require('@angular/common');
const router_1 = require('@angular/router');
const project_service_1 = require('./project.service');
let ProjectComponent = class ProjectComponent {
    constructor(router, projectService) {
        this.router = router;
        this.projectService = projectService;
        this.projects = {};
        this.technologyFilter = [];
    }
    ngOnInit() {
        this.projects = this.projectService.getProjects()
            .subscribe(projects => this.projects = projects, error => console.log(error));
    }
    setFilter(tech) {
        if (this.technologyFilter.indexOf(tech) === -1) {
            this.technologyFilter.push(tech);
        }
        else {
            //Getting the items index and removing it from the filter
            this.technologyFilter.splice(this.technologyFilter.indexOf(tech, 0), 1);
        }
    }
    //Checking if a project matches a given tag
    matchFilter(a) {
        let match = false;
        if (this.technologyFilter.length !== 0) {
            for (let i of a) {
                if (this.technologyFilter.indexOf(i) !== -1) {
                    match = true;
                    break;
                }
            }
        }
        else {
            match = true;
        }
        return match;
    }
    arrayToString(arr) {
        let str = '';
        for (let i = 0, x = arr.length; i < x; i++) {
            if (i == 0) {
                str += arr[i];
            }
            else if (i == x - 1) {
                str += ' & ' + arr[i];
            }
            else {
                str += ', ' + arr[i];
            }
        }
        return str;
    }
};
ProjectComponent = __decorate([
    core_1.Component({
        selector: 'projects',
        template: `
    <h2>Projects</h2>
    Here are some software that I have worked on in chronological order. All the external links open in a new window.
    <p>These are projects that I have worked on in my sparetime, paid or as a part of my education.</p>
    <div id="project-tags">
      <br><strong>Select technologies to display:</strong><br>
      <label *ngFor="let tag of projects.technologies">
        <input (click)="setFilter(tag)" type="checkbox" name="{{tag}}" value="{{tag}}"/> {{tag}}
      </label>
    </div>
    <div class="project" *ngFor="let p of projects.projects" [ngClass]="{show: matchFilter(p.technologies)}">
      <h3 class="p-name">{{p.name}} <span class="p-year">{{p.year}}</span></h3>
      <div class="gallery">
        <img *ngFor="let img of p.images" [src]="img" />
      </div>
      <strong>Status: </strong><em>{{p.status}}</em><br>
      <strong>Technologies: </strong><em>{{arrayToString(p.technologies)}}</em><br>
      <strong>Project type: </strong><em>{{p.type}}</em><br>
      <p><strong>Summary: </strong>{{p.summary}}</p>
      <span *ngIf="p.url !== ''"><strong>Url: </strong>
        <a  [href]="p.url" target="_blank">{{p.url}}</a>
        <!--*ngIf="p.url.indexOf('http') > -1" <a *ngIf="p.url.indexOf('http') === -1" (click)="changePage(p.url.replace('#', ''), $event)" [href]="p.url">{{p.url}}</a>-->
      </span>
    </div>
  `,
        styleUrls: [],
        directives: [common_1.NgClass],
        providers: [project_service_1.ProjectService]
    }), 
    __metadata('design:paramtypes', [router_1.Router, project_service_1.ProjectService])
], ProjectComponent);
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=project.component.js.map