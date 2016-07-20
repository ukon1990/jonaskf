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

  constructor(private downloadService: DownloadService){}
  ngOnInit(): void{
    this.downloads = this.downloadService.getDownloads()
      .subscribe(
        downloads => this.downloads = downloads,
        error => console.log(error)
      );
      this.foreground = window.location.hash.replace('#', '').split('/')[1];
  }

  readMore(project): void{
    if(this.foreground === project){
      this.foreground = '';
      window.history.pushState('s','a', window.location.hash.split('/')[0]);
    }else{
      this.foreground = project;
      window.history.pushState('s','a', window.location.hash + '/' + project);
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
