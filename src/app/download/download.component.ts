import {Component,OnDestroy, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {Download} from './download';
import {DownloadService} from './download.service';

@Component({
  selector: 'downloads',
  templateUrl: 'download.component.html',
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
