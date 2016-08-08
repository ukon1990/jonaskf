"use strict";
const router_1 = require('@angular/router');
const cv_component_1 = require('./cv.component');
const project_component_1 = require('./project.component');
const download_component_1 = require('./download.component');
const routes = [
    { path: 'cv', component: cv_component_1.CVComponent },
    { path: 'projects', component: project_component_1.ProjectComponent },
    { path: 'downloads', component: download_component_1.DownloadComponent },
    { path: 'downloads/:id', component: download_component_1.DownloadComponent },
    { path: '**', component: cv_component_1.CVComponent } //404
];
exports.appRouterProviders = [router_1.provideRouter(routes)];
//# sourceMappingURL=app.routes.js.map