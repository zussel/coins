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
var core_1 = require("@angular/core");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var moment = require("moment/moment");
var core_2 = require("@angular/core");
var DatepickerPopupComponent = (function () {
    function DatepickerPopupComponent() {
        this.dateChange = new core_2.EventEmitter();
        this.showPopup = false;
    }
    DatepickerPopupComponent.prototype.toggle = function () {
        this.showPopup = !this.showPopup;
    };
    DatepickerPopupComponent.prototype.hide = function () {
        this.date = moment(this.value);
        this.dateString = this.date.format('DD.MM.YYYY');
        this.dateChange.emit(this.date);
        this.showPopup = false;
    };
    DatepickerPopupComponent.prototype.ngOnInit = function () {
        if (this.date && this.date.isValid()) {
            this.value = this.date.toDate();
            this.dateString = this.date.format('DD.MM.YYYY');
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DatepickerPopupComponent.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatepickerPopupComponent.prototype, "date", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_2.EventEmitter)
    ], DatepickerPopupComponent.prototype, "dateChange", void 0);
    DatepickerPopupComponent = __decorate([
        core_1.Component({
            selector: 'datepicker-popup',
            directives: [ng2_bootstrap_1.DATEPICKER_DIRECTIVES],
            templateUrl: 'app/shared/components/datepicker-popup.component.html',
            styleUrls: ['app/shared/components/datepicker-popup.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DatepickerPopupComponent);
    return DatepickerPopupComponent;
}());
exports.DatepickerPopupComponent = DatepickerPopupComponent;
//# sourceMappingURL=datepicker-popup.component.js.map