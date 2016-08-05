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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
core_1.enableProdMode();
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Jonas K.Flønes';
        this.currentPage = '';
        this.previousPage = '';
        this.isMenuToggeled = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log(window.location.pathname);
        //Redirecting old links to new ones
        if (window.location.pathname == '/showcase/development/android-development') {
            console.log('da');
            window.history.pushState('', '', 'downloads/eatable');
            location.reload();
        }
        else if (window.location.pathname == '/showcase/development/vermin-run') {
            window.history.pushState('', '', 'downloads/vermin-run');
            location.reload();
        }
    };
    AppComponent.prototype.menuToggle = function () {
        this.isMenuToggeled = !this.isMenuToggeled;
    };
    AppComponent.prototype.hashChange = function () {
        this.currentPage = window.location.hash.replace('#', '').split('/')[0] || 'cv';
    };
    AppComponent.prototype.changePage = function (target, event) {
        event.preventDefault();
        window.history.pushState('s', 'a', '#' + target);
        if (this.currentPage !== target) {
            this.previousPage = this.currentPage;
            this.currentPage = target;
        }
        else {
            this.currentPage = target;
            this.previousPage = '';
        }
        this.menuToggle();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'app/templates/body.html',
            directives: [common_1.NgClass, router_1.ROUTER_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map