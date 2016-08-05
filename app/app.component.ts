import {Component, enableProdMode} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {NgClass} from '@angular/common';
import {HTTP_PROVIDERS} from '@angular/http';

enableProdMode();
@Component({
  selector: 'app',
  templateUrl:'app/templates/body.html',
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
    console.log(window.location.pathname);
    //Redirecting old links to new ones
    if(window.location.pathname == '/showcase/development/android-development'){
      console.log('da');
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
