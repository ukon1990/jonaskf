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
var CVService = (function () {
    function CVService(http) {
        this.http = http;
    }
    CVService.prototype.get = function () {
        return this.http.get('app/data/cv.json')
            .map(function (response) { return function (r) { console.log(r.skills.programming); return r; }(response.json()); });
    };
    CVService.prototype.getSkills = function () {
        return this.http.get('app/data/cv.json')
            .map(function (response) { return response.json().skills; });
    };
    CVService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CVService);
    return CVService;
}());
exports.CVService = CVService;
//# sourceMappingURL=cv.service.js.map