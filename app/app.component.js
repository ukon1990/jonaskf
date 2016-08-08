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
const router_1 = require('@angular/router');
const common_1 = require('@angular/common');
const http_1 = require('@angular/http');
core_1.enableProdMode();
let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'Jonas K.Flønes';
        this.currentPage = '';
        this.previousPage = '';
        this.isMenuToggeled = false;
    }
    ngOnInit() {
        //Redirecting old links to new ones
        if (window.location.pathname == '/showcase/development/android-development') {
            window.history.pushState('', '', 'downloads/eatable');
            location.reload();
        }
        else if (window.location.pathname == '/showcase/development/vermin-run') {
            window.history.pushState('', '', 'downloads/vermin-run');
            location.reload();
        }
    }
    menuToggle() {
        this.isMenuToggeled = !this.isMenuToggeled;
    }
    hashChange() {
        this.currentPage = window.location.hash.replace('#', '').split('/')[0] || 'cv';
    }
    changePage(target, event) {
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
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: `
    <header>
      <div id="title">
        <a routerLink="/cv"><h1>{{title}}</h1></a>
      </div>
      <button id="menu" [ngClass]="{toggle: isMenuToggeled}" (click)="menuToggle()">Menu</button>
      <nav [ngClass]="{show: isMenuToggeled}">
        <ul>
          <li><a (click)="menuToggle()" routerLink="/cv" routerLinkActive="selected">CV</a></li>
          <li><a (click)="menuToggle()" routerLink="/projects" routerLinkActive="selected">Projects</a></li>
          <li><a (click)="menuToggle()" routerLink="/downloads" routerLinkActive="selected">Downloads</a></li>
        </ul>
      </nav>
    </header>
    <div id="content">
      <!-- Resume -->
      <router-outlet></router-outlet>
    </div>
  `,
        directives: [common_1.NgClass, router_1.ROUTER_DIRECTIVES],
        providers: [http_1.HTTP_PROVIDERS]
    }), 
    __metadata('design:paramtypes', [router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map