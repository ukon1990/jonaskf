"use strict";
var router_1 = require('@angular/router');
var cv_component_1 = require('./cv.component');
var project_component_1 = require('./project.component');
var download_component_1 = require('./download.component');
var routes = [
    { path: 'cv', component: cv_component_1.CVComponent },
    { path: 'projects', component: project_component_1.ProjectComponent },
    { path: 'downloads', component: download_component_1.DownloadComponent },
    { path: 'downloads/:id', component: download_component_1.DownloadComponent },
    { path: '**', component: cv_component_1.CVComponent } //404
];
exports.appRouterProviders = [router_1.provideRouter(routes)];
//# sourceMappingURL=app.routes.js.map