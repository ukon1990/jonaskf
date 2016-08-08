import {Component,OnDestroy, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {Download} from './download';
import {DownloadService} from './download.service';

@Component({
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
  styleUrls:[],
  directives: [NgClass],
  providers: [DownloadService]
})

export class DownloadComponent implements OnDestroy, OnInit{
  downloads = {};
  foreground: string = undefined;
  sub: any;
  fullscreenImg: number = -1;

  constructor(private route: ActivatedRoute, private router: Router, private downloadService: DownloadService){}
  ngOnInit(): void{
    this.sub = this.route.params.subscribe(
      params => {
        this.foreground = params['id'];
      }
    );
    this.downloads = this.downloadService.getDownloads()
      .subscribe(
        downloads => this.downloads = downloads,
        error => console.log(error)
      );
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

  onSelect(id: string) {
    this.router.navigate(['/downloads', id]);
  }

  imgClick(index): void{
    if(this.fullscreenImg !== index){
      this.fullscreenImg = index;
    }else{
      this.fullscreenImg = -1;
    }
  }

  test(v): string{
    console.log(v);
    return 'https://www.youtube.com/embed/S8Y2vCt25rA?feature=oembed';
  }

  readMore(project): void{
    if(this.foreground === project){
      this.router.navigate(['/downloads']);
      this.foreground = undefined;
      this.fullscreenImg = -1;
      window.scrollTo(0,0);
    }else{
      this.foreground = project;
      this.router.navigate(['/downloads', project]);
      window.scrollTo(0,0);
    }
  }

  arrayToString(arr): string{
    let str = '';
    for(let i = 0, x = arr.length; i < x; i++){
      if(i == 0){
        str += arr[i];
      }else if(i == x - 1){
        str += ' & ' + arr[i];
      }else{
        str += ', ' + arr[i];
      }
    }
    return str;
  }
}
