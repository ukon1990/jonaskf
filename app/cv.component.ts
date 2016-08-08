import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {Router} from '@angular/router';
import {CV} from './cv';
import {CVService} from './cv.service';

@Component({
  selector: 'cv',
  template: `
    <h2>CV</h2>
    <div itemscope itemtype="http://schema.org/Person">
        <div class="cv-left portrait">
            <img src="img/moi-300x265.jpg" />
        </div>
        <div class="cv-left about-me-content">
            <div class="cv-left about-me-title">Name: </div>
            <div class="cv-left name" itemprop="givenName">{{cv.givenName}}</div>
            <div class="cv-left name" itemprop="additionalName">{{cv.additionalName}}</div>
            <div class="cv-left name" itemprop="familyName">{{cv.familyName}}</div>
            <div class="cv-left about-me-title">Mail: </div>
            <div class="cv-left " itemprop="email"><a href="mailto:{{cv.mail}}">{{cv.mail}}</a></div>
            <div class="cv-left about-me-title">GitHub: </div>
            <div class="cv-left " itemprop="jobTitle"><a [href]="cv.github" target="_blank">{{cv.github}}</a></div>
            <div class="cv-left about-me-title">Nationality: </div>
            <div class="cv-left " itemprop="nationality">{{cv.nationality}}</div>
            <div class="cv-left about-me-title">Occupation: </div>
            <div class="cv-left " itemprop="jobTitle">{{cv.occupation}}</div>
            <div class="cv-left about-me-title">Company: </div>
            <div class="cv-left " itemprop="worksFor">{{cv.company}}</div>
            <p class="cv-left clear-both">The star ratings used below, indicates my self-confidence in the subject.</p>
            <div class="cv-left about-me-title">Programming: </div>
            <div class="skill-programming">
                <div class="skill" *ngFor="let p of skills.programming">
                    <div class="clear-both">
                        <img class="logo float-left" [src]="p.icon" />
                        <div class="float-left">
                            <em>{{p.name}}</em><br>
                            In year {{year - p.fromYear + 1}} - <div class="rating float-right rating-{{p.rating}}"></div>
                        </div>
                    </div>
                    <div class="sub-skills">
                        <div class="sub-skill" *ngFor="let s of p.subSkill">
                            {{s.name}} <div class="rating float-right rating-{{s.rating}}"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-me-title" style="width: auto;">Tools: </div>
            <div class="skill-programming">
                <div class="skill" *ngFor="let p of skills.tools">
                    <div class="clear-both">
                        <img class="logo float-left" [src]="p.icon" />
                        <div class="float-left">
                            <em>{{p.name}}</em><br>
                            <div class="float-left rating rating-{{p.rating}}"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-me-title" style="width: auto;">Operating systems: </div>
            <div class="skill-programming">
                <div class="skill" *ngFor="let p of skills.os">
                    <div class="clear-both">
                        <img class="logo float-left" [src]="p.icon" />
                        <div class="float-left">
                            <em>{{p.name}}</em><br>
                            <div class="rating float-right rating-{{p.rating}}"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="about-me-title">Languages: </div>
            <div class="skill-programming">
                <div class="skill" *ngFor="let p of skills.languages">
                    <div class="clear-both">
                        <img class="logo float-left" [src]="p.icon" />
                        <div class="float-left">
                            <em>{{p.name}}</em><br>
                            {{p.rating}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `,
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
    this.router.navigate(['/cv']);
  }
}
