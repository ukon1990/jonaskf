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
var cv_service_1 = require('./cv.service');
var CVComponent = (function () {
    function CVComponent(cvService) {
        this.cvService = cvService;
        this.cv = {};
        this.skills = {};
        this.year = new Date().getFullYear();
    }
    CVComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cv = this.cvService.get()
            .subscribe(function (cv) {
            _this.cv = cv;
            _this.skills = cv.skills;
        }, function (error) { return console.log(error); });
    };
    CVComponent = __decorate([
        core_1.Component({
            selector: 'cv',
            templateUrl: 'app/templates/cv.html',
            styleUrls: [],
            directives: [common_1.NgClass],
            providers: [cv_service_1.CVService]
        }), 
        __metadata('design:paramtypes', [cv_service_1.CVService])
    ], CVComponent);
    return CVComponent;
}());
exports.CVComponent = CVComponent;
//# sourceMappingURL=cv.component.js.map