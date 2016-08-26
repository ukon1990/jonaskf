import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {Router} from '@angular/router';
import {About} from './about';
import {AboutService} from './about.service';

@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html',
  directives: [NgClass],
  providers: [AboutService]
})
export class AboutComponent {
  title = 'About me';

  cv = {};
  skills = {};
  education = {};
  year = new Date().getFullYear();

  constructor(private router: Router, private aboutService: AboutService){}
  ngOnInit(): void{
    this.cv = this.aboutService.get()
      .subscribe(
        cv => {
          this.cv = cv
          this.skills = cv.skills
          this.education = cv.education;
        },
        error => console.log(error)
      );
    this.router.navigate(['/about']);
  }
}
