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
const download_service_1 = require('./download.service');
let DownloadComponent = class DownloadComponent {
    constructor(route, router, downloadService) {
        this.route = route;
        this.router = router;
        this.downloadService = downloadService;
        this.downloads = {};
        this.foreground = undefined;
        this.fullscreenImg = -1;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.foreground = params['id'];
        });
        this.downloads = this.downloadService.getDownloads()
            .subscribe(downloads => this.downloads = downloads, error => console.log(error));
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    onSelect(id) {
        this.router.navigate(['/downloads', id]);
    }
    imgClick(index) {
        if (this.fullscreenImg !== index) {
            this.fullscreenImg = index;
        }
        else {
            this.fullscreenImg = -1;
        }
    }
    test(v) {
        console.log(v);
        return 'https://www.youtube.com/embed/S8Y2vCt25rA?feature=oembed';
    }
    readMore(project) {
        if (this.foreground === project) {
            this.router.navigate(['/downloads']);
            this.foreground = undefined;
            this.fullscreenImg = -1;
            window.scrollTo(0, 0);
        }
        else {
            this.foreground = project;
            this.router.navigate(['/downloads', project]);
            window.scrollTo(0, 0);
        }
    }
    arrayToString(arr) {
        let str = '';
        for (let i = 0, x = arr.length; i < x; i++) {
            if (i == 0) {
                str += arr[i];
            }
            else if (i == x - 1) {
                str += ' & ' + arr[i];
            }
            else {
                str += ', ' + arr[i];
            }
        }
        return str;
    }
};
DownloadComponent = __decorate([
    core_1.Component({
        selector: 'downloads',
        template: `
    <h2>Downloads</h2>
    <div class="download" [ngClass]="{foreground: d.slug === foreground}" *ngFor="let d of downloads.downloads">
      <div *ngIf="d.slug === foreground || !foreground">
        <h3>{{d.name}} <button [ngClass]="{toggle: d.slug == foreground}" class="btn" (click)="readMore(d.slug)">Read {{d.slug == foreground ? 'less' : 'more'}}</button></h3>
        <p [innerHTML]="d.summary"></p>
        <p><strong>Status: </strong>{{d.status}}</p>
        <p><strong>Requirements: </strong>{{arrayToString(d.requirements)}}</p>
        <p class="more" [innerHTML]="d.text"></p>
        <div *ngIf="d.images.length !== 0"class="carousel">
          <ul class="slides more">
            <li [ngClass]="{full: fullscreenImg === i, hide: fullscreenImg !== -1 && fullscreenImg !== i}" (click)="imgClick(i)" *ngFor="let img of d.images, let i = index">
              <img [src]="img.src" [alt]="img.alt"/>
            </li>
          </ul>
        </div>
        <div class="more" *ngFor="let v of d.video">
          <iframe *ngIf="d.slug === 'wah'" width="640" height="360" src="https://www.youtube.com/embed/VIngDzcniYk" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
          <iframe *ngIf="d.slug === 'eatable'" width="640" height="360" src="https://www.youtube.com/embed/80AsYIiqtJM" frameborder="0" allowfullscreen=""></iframe>
          <iframe *ngIf="d.slug === 'vermin-run'" width="640" height="360" src="https://www.youtube.com/embed/S8Y2vCt25rA?feature=oembed" frameborder="0" allowfullscreen=""></iframe>
        </div>
        <ul class="dl-link">
          <li *ngFor="let url of d.changelog[0].url">
            <a [href]="url.href" class="btn">Download {{d.changelog[0].version}} for {{url.platform}}</a>
          </li>
          <li *ngFor="let url of d.links">
            <a [href]="url.href" target="_blank" class="btn">Go to {{url.name}}</a>
          </li>
        </ul>
        <h3 class="more">Changelog</h3>
        <div class="more" *ngFor="let c of d.changelog">
          <strong>{{c.date || date}} - {{c.version}}</strong>
          <ul class="dl-link">
            <li *ngFor="let url of c.url">
              <a *ngIf="c.url !== ''" [href]="url.href">Download for {{url.platform}}</a>
            </li>
            <li *ngIf="c.url.length === 0">No download links are available</li>
          </ul>
          <div [innerHTML]="c.changes"></div>
        </div>
      </div>
    </div>
  `,
        styleUrls: [],
        directives: [common_1.NgClass],
        providers: [download_service_1.DownloadService]
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, download_service_1.DownloadService])
], DownloadComponent);
exports.DownloadComponent = DownloadComponent;
//# sourceMappingURL=download.component.js.map