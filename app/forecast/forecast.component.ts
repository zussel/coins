import {Component, OnInit} from "@angular/core";
import {CHART_DIRECTIVES} from "ng2-charts";
import {NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES} from "@angular/common";
import {OrderEntryEstimateService} from "../orderentry/order-entry-estimate.service";
import {OrderEntryService} from "../orderentry/order-entry.service";
import {OrderEntry} from "../orderentry/order-entry";
import * as _ from 'lodash';

@Component({
    selector: 'forecast',
    templateUrl: 'app/forecast/forecast.component.html',
    styleUrls: ['app/forecast/forecast.component.css'],
    providers: [OrderEntryService, OrderEntryEstimateService],
    directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class ForecastComponent implements OnInit {
    public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels:string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;

    constructor(private orderEntryService: OrderEntryService,
                private orderEntryEstimateService: OrderEntryEstimateService) {}

    public barChartData:any[];

    public orderEntries: OrderEntry[];

    // events
    public chartClicked(e:any):void {
        // console.log(e);
    }

    public chartHovered(e:any):void {
        // console.log(e);
    }

    getOrderEntries() {
        return this.orderEntryService.getOrderEntries().then(orderEntries => this.orderEntries = orderEntries);
    }

    ngOnInit() {
        let self = this;
        this.getOrderEntries().then(function () {
            let estimates = self.orderEntryEstimateService.estimateYear(2016, self.orderEntries);
            self.barChartData = [
                {data: _.map(estimates, 'expenses'), label: 'Ausgaben'},
                {data: _.map(estimates, 'earnings'), label: 'Einahmen'}
            ];
        });
    }
}