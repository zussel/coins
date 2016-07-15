import {Component, OnInit} from '@angular/core';
import {OrderEntry} from "./order.entry";
import {OrderEntryService} from "./order.entry.service";
import {OrderEntryRepeatPipe} from "./order.entry.repeat.pipe";
import {MomentPipe} from "./moment.pipe";
import {OrderEntryEstimateService} from "./order.entry.estimate.service";

@Component({
    selector: 'app-coins',
    templateUrl: 'app/app.components.html',
    styleUrls: ['app/app.component.css'],
    providers: [
        OrderEntryService,
        OrderEntryEstimateService
    ],
    pipes: [
        OrderEntryRepeatPipe,
        MomentPipe
    ]
})

export class AppComponent implements OnInit {
    title = "Coins";
    tagline = "Get to know where yout money is!";

    constructor(private orderEntryService: OrderEntryService,
                private orderEntryEstimateService: OrderEntryEstimateService) {}

    public orderEntries: OrderEntry[];

    getOrderEntries() {
        return this.orderEntryService.getOrderEntries().then(orderEntries => this.orderEntries = orderEntries);
    }

    ngOnInit() {
        let self = this;
        this.getOrderEntries().then(function () {
            console.log(self.orderEntryEstimateService.estimateYear(2016, self.orderEntries));
        });
    }
}
