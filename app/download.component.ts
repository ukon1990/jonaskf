import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {Download} from './download';
import {DownloadService} from './download.service';

@Component({
  selector: 'downloads',
  templateUrl: 'app/templates/downloads.html',
  styleUrls:[],
  directives: [NgClass],
  providers: [DownloadService]
})

export class DownloadComponent{
  downloads = {};
  foreground: string = '';
  fullscreenImg: number = -1;

  constructor(private downloadService: DownloadService){}
  ngOnInit(): void{
    this.downloads = this.downloadService.getDownloads()
      .subscribe(
        downloads => this.downloads = downloads,
        error => console.log(error)
      );
      this.foreground = window.location.hash.replace('#', '').split('/')[1];
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
      this.foreground = '';
      this.fullscreenImg = -1;
      window.history.pushState('s','a', window.location.hash.split('/')[0]);
      window.scrollTo(0,0);
    }else{
      this.foreground = project;
      window.history.pushState('s','a', window.location.hash.split('/')[0] + '/' + project);
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
