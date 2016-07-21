import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {CV} from './cv.component';
import {ProjectComponent} from './project.component';
import {ProjectService} from './project.service';
import {DownloadComponent} from './download.component';
import {HTTP_PROVIDERS} from '@angular/http';
//import {RacingDataService} from './racing-data.service';

@Component({
  selector: 'app',
  templateUrl:'app/templates/body.html',
  directives: [NgClass, CV, ProjectComponent, DownloadComponent],
  providers: [ProjectService, HTTP_PROVIDERS]
})
export class AppComponent{
  title = 'JonasKF';
  currentPage: string = '';
  previousPage: string = '';
  isMenuToggeled: boolean = false;

  ngOnInit(){
    this.currentPage = window.location.hash.replace('#', '').split('/')[0] || 'cv';
    window.addEventListener("hashchange", this.hashChange, false);
  }

  menuToggle(){
    this.isMenuToggeled = !this.isMenuToggeled;
  }

  hashChange(): void{
    console.log('Hash changed');
    this.currentPage = window.location.hash.replace('#', '').split('/')[0] || 'cv';
    console.log(this.currentPage);
  }

  changePage(target, event){
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
