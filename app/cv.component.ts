import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
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

  constructor(private cvService: CVService){}
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

  getRating(rating: number, max: number): string{
    let cover = rating / max;
    return `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 156.47 27.08"><defs><style>.cls-1{fill:url(#linear-gradient);}.cls-2{fill:url(#linear-gradient-2);}.cls-3{fill:url(#linear-gradient-3);}.cls-4{fill:url(#linear-gradient-4);}.cls-5{fill:url(#linear-gradient-5);}</style><linearGradient id="linear-gradient" x1="9.66" y1="14.91" x2="159.16" y2="13.41" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ff0"/><stop offset="` + cover + `" stop-color="#312d26"/><stop offset="1" stop-color="#2a2627"/><stop offset="1"/></linearGradient><linearGradient id="linear-gradient-2" x1="9.65" y1="13.63" x2="159.15" y2="12.13" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-3" x1="9.65" y1="13.95" x2="159.15" y2="12.45" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-4" x1="9.66" y1="14.27" x2="159.16" y2="12.77" xlink:href="#linear-gradient"/><linearGradient id="linear-gradient-5" x1="9.66" y1="14.59" x2="159.16" y2="13.09" xlink:href="#linear-gradient"/></defs><title>rating</title><g id="Layer_2" data-name="Layer 2"><g id="Stars"><g id="_1Star" data-name="1Star"><polygon class="cls-1" points="142.24 0 146.64 8.91 156.47 10.34 149.35 17.28 151.03 27.08 142.24 22.45 133.44 27.08 135.12 17.28 128 10.34 137.84 8.91 142.24 0"/><polygon class="cls-2" points="14.24 0 18.64 8.91 28.47 10.34 21.36 17.28 23.04 27.08 14.24 22.45 5.44 27.08 7.12 17.28 0 10.34 9.84 8.91 14.24 0"/><polygon class="cls-3" points="46.24 0 50.64 8.91 60.47 10.34 53.35 17.28 55.03 27.08 46.24 22.45 37.44 27.08 39.12 17.28 32 10.34 41.84 8.91 46.24 0"/><polygon class="cls-4" points="78.24 0 82.64 8.91 92.47 10.34 85.36 17.28 87.03 27.08 78.24 22.45 69.44 27.08 71.12 17.28 64 10.34 73.84 8.91 78.24 0"/><polygon class="cls-5" points="110.24 0 114.64 8.91 124.47 10.34 117.36 17.28 119.03 27.08 110.24 22.45 101.44 27.08 103.12 17.28 96 10.34 105.84 8.91 110.24 0"/></g></g></g></svg>`;
  }
}
