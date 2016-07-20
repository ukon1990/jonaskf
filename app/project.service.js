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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
    }
    ProjectService.prototype.getProjects = function () {
        return this.http.get('app/data/projects.json')
            .map(function (response) { return function (r) {
            var tags = [];
            var projects = r.projects.sort(function (a, b) {
                return a.year < b.year;
            });
            for (var _i = 0, _a = r.projects; _i < _a.length; _i++) {
                var p = _a[_i];
                for (var _b = 0, _c = p.technologies; _b < _c.length; _b++) {
                    var t = _c[_b];
                    if (tags.indexOf(t) == -1) {
                        tags.push(t);
                    }
                }
            }
            console.log(tags);
            r.technologies = tags;
            r.projects = projects;
            return r;
        }(response.json()); });
    };
    ProjectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProjectService);
    return ProjectService;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map