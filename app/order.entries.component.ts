import {OrderEntryService} from "./order.entry.service";
import {OrderEntryEstimateService} from "./order.entry.estimate.service";
import {OrderEntryRepeatPipe} from "./order.entry.repeat.pipe";
import {MomentPipe} from "./moment.pipe";
import {OnInit, Component} from "@angular/core";
import {OrderEntry} from "./order.entry";

@Component({
    selector: 'coins-order-entries',
    templateUrl: 'app/order.entries.component.html',
    styleUrls: ['app/order.entries.component.css'],
    providers: [
        OrderEntryService,
        OrderEntryEstimateService
    ],
    pipes: [
        OrderEntryRepeatPipe,
        MomentPipe
    ]
})
export class OrderEntriesComponent implements OnInit {
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