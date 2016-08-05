import {provideRouter, RouterConfig} from '@angular/router';
import {CVComponent} from './cv.component';
import {ProjectComponent} from './project.component';
import {ProjectService} from './project.service';
import {DownloadComponent} from './download.component';

const routes: RouterConfig= [
  {path: '', component: CVComponent},
  {path: 'projects', component: ProjectComponent},
  {path: 'downloads', component: DownloadComponent},
  {path: 'downloads/:id', component: DownloadComponent},
  {path: '**', component: CVComponent} //404
];

export const appRouterProviders = [ provideRouter(routes) ];
