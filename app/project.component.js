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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var project_service_1 = require('./project.service');
var ProjectComponent = (function () {
    function ProjectComponent(projectService) {
        this.projectService = projectService;
        this.projects = {};
        this.technologyFilter = [];
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projects = this.projectService.getProjects()
            .subscribe(function (projects) { return _this.projects = projects; }, function (error) { return console.log(error); });
    };
    ProjectComponent.prototype.setFilter = function (tech) {
        console.log(tech);
        if (this.technologyFilter.indexOf(tech) === -1) {
            this.technologyFilter.push(tech);
        }
        else {
            //Getting the items index and removing it from the filter
            this.technologyFilter.splice(this.technologyFilter.indexOf(tech, 0), 1);
        }
        console.log(this.technologyFilter);
    };
    //Checking if a project matches a given tag
    ProjectComponent.prototype.matchFilter = function (a) {
        var match = false;
        if (this.technologyFilter.length !== 0) {
            for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
                var i = a_1[_i];
                if (this.technologyFilter.indexOf(i) !== -1) {
                    console.log(i);
                    match = true;
                    break;
                }
            }
        }
        else {
            match = true;
        }
        return match;
    };
    ProjectComponent.prototype.arrayToString = function (arr) {
        var str = '';
        for (var i = 0, x = arr.length; i < x; i++) {
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
    };
    ProjectComponent = __decorate([
        core_1.Component({
            selector: 'work',
            templateUrl: 'app/templates/work.html',
            styleUrls: [],
            directives: [common_1.NgClass],
            providers: [project_service_1.ProjectService]
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService])
    ], ProjectComponent);
    return ProjectComponent;
}());
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=project.component.js.map