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
const common_1 = require('@angular/common');
const router_1 = require('@angular/router');
const cv_service_1 = require('./cv.service');
let CVComponent = class CVComponent {
    constructor(router, cvService) {
        this.router = router;
        this.cvService = cvService;
        this.cv = {};
        this.skills = {};
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
        this.cv = this.cvService.get()
            .subscribe(cv => {
            this.cv = cv;
            this.skills = cv.skills;
        }, error => console.log(error));
        this.router.navigate(['/cv']);
    }
};
CVComponent = __decorate([
    core_1.Component({
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
        styleUrls: [],
        directives: [common_1.NgClass],
        providers: [cv_service_1.CVService]
    }), 
    __metadata('design:paramtypes', [router_1.Router, cv_service_1.CVService])
], CVComponent);
exports.CVComponent = CVComponent;
//# sourceMappingURL=cv.component.js.map