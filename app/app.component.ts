import {Component, enableProdMode} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {NgClass} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';

enableProdMode();
@Component({
  selector: 'app',
  template:`
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
  directives: [NgClass, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS]
})
export class AppComponent{
  title = 'Jonas K.Flønes';
  currentPage: string = '';
  previousPage: string = '';
  isMenuToggeled: boolean = false;

  constructor(private router: Router){}
  ngOnInit(): void{
    //Redirecting old links to new ones
    if(window.location.pathname == '/showcase/development/android-development'){
      window.history.pushState('', '', 'downloads/eatable');
      location.reload();
    }else if(window.location.pathname == '/showcase/development/vermin-run'){
      window.history.pushState('', '', 'downloads/vermin-run');
      location.reload();
    }
  }

  menuToggle(): void{
    this.isMenuToggeled = !this.isMenuToggeled;
  }

  hashChange(): void{
    this.currentPage = window.location.hash.replace('#', '').split('/')[0] || 'cv';
  }

  changePage(target, event): void{
    event.preventDefault();
    window.history.pushState('s','a', '#' + target);
    if(this.currentPage !== target){
      this.previousPage = this.currentPage;
      this.currentPage = target;
    }else{
      this.currentPage = target;
      this.previousPage = '';
    }
    this.menuToggle();
  }

}
