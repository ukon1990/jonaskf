import {provideRouter, RouterConfig} from '@angular/router';
import {AboutComponent} from './about.component';
import {ProjectComponent} from './project.component';
import {DownloadComponent} from './download.component';

const routes: RouterConfig= [
  {path: '', component: AboutComponent},
  {path: 'projects', component: ProjectComponent},
  {path: 'downloads', component: DownloadComponent},
  {path: 'downloads/:id', component: DownloadComponent},
  {path: '**', component: AboutComponent} //404
];

export const appRouterProviders = [ provideRouter(routes) ];
