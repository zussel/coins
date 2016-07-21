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
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var order_entry_1 = require("./order-entry");
var enum_pipe_1 = require("../shared/pipes/enum.pipe");
var moment_pipe_1 = require("../shared/pipes/moment.pipe");
var order_entry_repeat_pipe_1 = require("./order-entry-repeat.pipe");
var datepicker_popup_component_1 = require("../shared/components/datepicker-popup.component");
var _ = require('lodash');
var moment = require("moment/moment");
var OrderEntryDetailModalComponent = (function () {
    function OrderEntryDetailModalComponent() {
        this.repeats = order_entry_1.EntryRepeat;
        this.addingRange = false;
        this.showDatepicker = false;
        this.newRange = new order_entry_1.OrderEntryRange(0);
    }
    OrderEntryDetailModalComponent.prototype.show = function () {
        this.lgModal.show();
    };
    OrderEntryDetailModalComponent.prototype.save = function () {
        console.log('saved order entry: ', this.orderEntry);
        this.lgModal.hide();
    };
    OrderEntryDetailModalComponent.prototype.addRange = function () {
        var successor = _.first(this.orderEntry.ranges);
        if (successor.to && successor.to.isValid()) {
            this.newRange.from = successor.to.clone().add(1, 'day');
        }
        this.newRange.value = successor.value;
        this.addingRange = true;
    };
    OrderEntryDetailModalComponent.prototype.cancelRange = function () {
        this.resetNewRange();
        this.addingRange = false;
    };
    OrderEntryDetailModalComponent.prototype.saveRange = function () {
        _.first(this.orderEntry.ranges).to = this.newRange.from.clone().subtract(1, 'day');
        this.orderEntry.ranges.unshift(this.newRange);
        this.newRange = new order_entry_1.OrderEntryRange(0);
        this.addingRange = false;
    };
    OrderEntryDetailModalComponent.prototype.hidePopup = function () {
        this.showDatepicker = false;
    };
    OrderEntryDetailModalComponent.prototype.isValidRange = function (range) {
        var successor = _.first(this.orderEntry.ranges);
        if (!range.from) {
            return false;
        }
        else if ((!successor.to || !successor.to.isValid()) && range.from.isSameOrBefore(successor.from)) {
            return false;
        }
        else if (successor.to && range.from.isBefore(successor.to)) {
            return false;
        }
        else if (range.to && range.from.isSameOrAfter(range.to)) {
            return false;
        }
        return true;
    };
    OrderEntryDetailModalComponent.prototype.resetNewRange = function () {
        this.newRange.to = null;
        this.newRange.from = moment();
        this.newRange.value = 0;
    };
    __decorate([
        core_1.ViewChild('lgModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], OrderEntryDetailModalComponent.prototype, "lgModal", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', order_entry_1.OrderEntry)
    ], OrderEntryDetailModalComponent.prototype, "orderEntry", void 0);
    OrderEntryDetailModalComponent = __decorate([
        core_1.Component({
            selector: 'order-entry-detail-modal',
            directives: [
                ng2_bootstrap_1.MODAL_DIRECTIVES,
                common_1.CORE_DIRECTIVES,
                ng2_bootstrap_1.DATEPICKER_DIRECTIVES,
                datepicker_popup_component_1.DatepickerPopupComponent
            ],
            viewProviders: [ng2_bootstrap_1.BS_VIEW_PROVIDERS],
            templateUrl: 'app/orderentry/order-entry-detail-modal.component.html',
            exportAs: 'orderEntryDetail',
            pipes: [enum_pipe_1.EnumPipe, moment_pipe_1.MomentPipe, order_entry_repeat_pipe_1.OrderEntryRepeatPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], OrderEntryDetailModalComponent);
    return OrderEntryDetailModalComponent;
}());
exports.OrderEntryDetailModalComponent = OrderEntryDetailModalComponent;
//# sourceMappingURL=order-entry-detail-modal.component.js.map