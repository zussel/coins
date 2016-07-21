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
var ng2_charts_1 = require("ng2-charts");
var common_1 = require("@angular/common");
var order_entry_estimate_service_1 = require("../orderentry/order-entry-estimate.service");
var order_entry_service_1 = require("../orderentry/order-entry.service");
var _ = require('lodash');
var ForecastComponent = (function () {
    function ForecastComponent(orderEntryService, orderEntryEstimateService) {
        this.orderEntryService = orderEntryService;
        this.orderEntryEstimateService = orderEntryEstimateService;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
    }
    // events
    ForecastComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    ForecastComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    ForecastComponent.prototype.getOrderEntries = function () {
        var _this = this;
        return this.orderEntryService.getOrderEntries().then(function (orderEntries) { return _this.orderEntries = orderEntries; });
    };
    ForecastComponent.prototype.ngOnInit = function () {
        var self = this;
        this.getOrderEntries().then(function () {
            var estimates = self.orderEntryEstimateService.estimateYear(2016, self.orderEntries);
            self.barChartData = [
                { data: _.map(estimates, 'expenses'), label: 'Ausgaben' },
                { data: _.map(estimates, 'earnings'), label: 'Einahmen' }
            ];
        });
    };
    ForecastComponent = __decorate([
        core_1.Component({
            selector: 'forecast',
            templateUrl: 'app/forecast/forecast.component.html',
            styleUrls: ['app/forecast/forecast.component.css'],
            providers: [order_entry_service_1.OrderEntryService, order_entry_estimate_service_1.OrderEntryEstimateService],
            directives: [ng2_charts_1.CHART_DIRECTIVES, common_1.NgClass, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [order_entry_service_1.OrderEntryService, order_entry_estimate_service_1.OrderEntryEstimateService])
    ], ForecastComponent);
    return ForecastComponent;
}());
exports.ForecastComponent = ForecastComponent;
//# sourceMappingURL=forecast.component.js.map