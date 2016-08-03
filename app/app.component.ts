import {Component, enableProdMode} from '@angular/core';
import {NgClass} from '@angular/common';
import {CVComponent} from './cv.component';
import {ProjectComponent} from './project.component';
import {ProjectService} from './project.service';
import {DownloadComponent} from './download.component';
import {HTTP_PROVIDERS} from '@angular/http';

enableProdMode();
@Component({
  selector: 'app',
  templateUrl:'app/templates/body.html',
  directives: [NgClass, CVComponent, ProjectComponent, DownloadComponent],
  providers: [ProjectService, HTTP_PROVIDERS]
})
export class AppComponent{
  title = 'Jonas K.Flønes';
  currentPage: string = '';
  previousPage: string = '';
  isMenuToggeled: boolean = false;

  ngOnInit(): void{
    this.currentPage = window.location.hash.replace('#', '').split('/')[0] || 'cv';
    window.addEventListener("hashchange", this.hashChange, false);
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
