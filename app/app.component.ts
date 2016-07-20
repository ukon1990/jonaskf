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
  isMenuToggeled: boolean = true;

  ngOnInit(){
    this.currentPage = window.location.hash.replace('#', '').split('/')[0] || 'cv';
  }

  menuToggle(){
    this.isMenuToggeled = !this.isMenuToggeled;
    console.log('clicked ' + this.isMenuToggeled);
  }
  changePage(target, event){
    event.preventDefault();
    window.history.pushState('s','a', '#' + target);
    this.currentPage = target;
    this.menuToggle();
  }

}
