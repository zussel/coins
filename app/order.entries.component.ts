import {OrderEntryService} from "./order.entry.service";
import {OrderEntryEstimateService} from "./order.entry.estimate.service";
import {OrderEntryRepeatPipe} from "./order.entry.repeat.pipe";
import {MomentPipe} from "./moment.pipe";
import {Component, OnInit} from "@angular/core";
import {OrderEntry} from "./order.entry";
import {OrderEntryDetailModalComponent} from "./order.entry.detail.modal.component";

@Component({
    selector: 'coins-order-entries',
    templateUrl: 'app/order.entries.component.html',
    styleUrls: ['app/order.entries.component.css'],
    providers: [
        OrderEntryService
    ],
    pipes: [
        OrderEntryRepeatPipe,
        MomentPipe
    ],
    directives: [OrderEntryDetailModalComponent]
})
export class OrderEntriesComponent implements OnInit {

    constructor(private orderEntryService: OrderEntryService) {
    }

    public current: OrderEntry;

    public orderEntries: OrderEntry[];

    show(orderEntry: OrderEntry, detailView: OrderEntryDetailModalComponent) {
        this.current = orderEntry;
        detailView.show();
    }

    getOrderEntries() {
        return this.orderEntryService.getOrderEntries().then(orderEntries => this.orderEntries = orderEntries);
    }

    ngOnInit() {
        this.getOrderEntries();
    }
}