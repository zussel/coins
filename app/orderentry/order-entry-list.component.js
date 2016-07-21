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
var order_entry_service_1 = require("./order-entry.service");
var order_entry_repeat_pipe_1 = require("./order-entry-repeat.pipe");
var moment_pipe_1 = require("../shared/pipes/moment.pipe");
var core_1 = require("@angular/core");
var order_entry_detail_modal_component_1 = require("./order-entry-detail-modal.component");
var OrderEntriesComponent = (function () {
    function OrderEntriesComponent(orderEntryService) {
        this.orderEntryService = orderEntryService;
    }
    OrderEntriesComponent.prototype.show = function (orderEntry, detailView) {
        this.current = orderEntry;
        detailView.show();
    };
    OrderEntriesComponent.prototype.getOrderEntries = function () {
        var _this = this;
        return this.orderEntryService.getOrderEntries().then(function (orderEntries) { return _this.orderEntries = orderEntries; });
    };
    OrderEntriesComponent.prototype.ngOnInit = function () {
        this.getOrderEntries();
    };
    OrderEntriesComponent = __decorate([
        core_1.Component({
            selector: 'coins-order-entries',
            templateUrl: 'app/orderentry/order-entry-list.component.html',
            styleUrls: ['app/orderentry/order-entry-list.component.css'],
            providers: [
                order_entry_service_1.OrderEntryService
            ],
            pipes: [
                order_entry_repeat_pipe_1.OrderEntryRepeatPipe,
                moment_pipe_1.MomentPipe
            ],
            directives: [order_entry_detail_modal_component_1.OrderEntryDetailModalComponent]
        }), 
        __metadata('design:paramtypes', [order_entry_service_1.OrderEntryService])
    ], OrderEntriesComponent);
    return OrderEntriesComponent;
}());
exports.OrderEntriesComponent = OrderEntriesComponent;
//# sourceMappingURL=order-entry-list.component.js.map