import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {Router} from '@angular/router';
import {CV} from './cv';
import {CVService} from './cv.service';

@Component({
  selector: 'cv',
  templateUrl: 'app/templates/cv.html',
  styleUrls:[],
  directives: [NgClass],
  providers: [CVService]
})

export class CVComponent{
  cv = {};
  skills = {};
  year = new Date().getFullYear();

  constructor(private router: Router, private cvService: CVService){}
  ngOnInit(): void{
    this.cv = this.cvService.get()
          .subscribe(
            cv => {
              this.cv = cv
              this.skills = cv.skills
            },
            error => console.log(error)
          );
  }
}
