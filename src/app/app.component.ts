import { Component, ViewEncapsulation } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {NgClass} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [NgClass, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS]
})
export class AppComponent {
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
}
