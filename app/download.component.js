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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var download_service_1 = require('./download.service');
var DownloadComponent = (function () {
    function DownloadComponent(downloadService) {
        this.downloadService = downloadService;
        this.downloads = {};
        this.foreground = '';
        this.fullscreenImg = -1;
    }
    DownloadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.downloads = this.downloadService.getDownloads()
            .subscribe(function (downloads) { return _this.downloads = downloads; }, function (error) { return console.log(error); });
        this.foreground = window.location.hash.replace('#', '').split('/')[1];
    };
    DownloadComponent.prototype.imgClick = function (index) {
        if (this.fullscreenImg !== index) {
            this.fullscreenImg = index;
        }
        else {
            this.fullscreenImg = -1;
        }
    };
    DownloadComponent.prototype.test = function (v) {
        console.log(v);
        return 'https://www.youtube.com/embed/S8Y2vCt25rA?feature=oembed';
    };
    DownloadComponent.prototype.readMore = function (project) {
        if (this.foreground === project) {
            this.foreground = '';
            this.fullscreenImg = -1;
            window.history.pushState('s', 'a', window.location.hash.split('/')[0]);
        }
        else {
            this.foreground = project;
            window.history.pushState('s', 'a', window.location.hash + '/' + project);
        }
    };
    DownloadComponent.prototype.arrayToString = function (arr) {
        var str = '';
        for (var i = 0, x = arr.length; i < x; i++) {
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
    };
    DownloadComponent = __decorate([
        core_1.Component({
            selector: 'downloads',
            templateUrl: 'app/templates/downloads.html',
            styleUrls: [],
            directives: [common_1.NgClass],
            providers: [download_service_1.DownloadService]
        }), 
        __metadata('design:paramtypes', [download_service_1.DownloadService])
    ], DownloadComponent);
    return DownloadComponent;
}());
exports.DownloadComponent = DownloadComponent;
//# sourceMappingURL=download.component.js.map