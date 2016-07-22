import {OrderEntryService} from "./order-entry.service";
import {OrderEntryEstimateService} from "./order-entry-estimate.service";
import {OrderEntryRepeatPipe} from "./order-entry-repeat.pipe";
import {MomentPipe} from "../shared/pipes/moment.pipe";
import {Component, OnInit} from "@angular/core";
import {OrderEntry} from "./order-entry";
import {OrderEntryDetailModalComponent} from "./order-entry-detail-modal.component";
import {EarningsPipe} from "../shared/pipes/earnings.pipe";
import {ExpensesPipe} from "../shared/pipes/expenses.pipe";

@Component({
    selector: 'coins-order-entries',
    templateUrl: 'app/orderentry/order-entry-list.component.html',
    styleUrls: ['app/orderentry/order-entry-list.component.css'],
    providers: [
        OrderEntryService
    ],
    pipes: [
        OrderEntryRepeatPipe,
        MomentPipe,
        EarningsPipe,
        ExpensesPipe
    ],
    directives: [OrderEntryDetailModalComponent]
})
export class OrderEntriesComponent implements OnInit {

    constructor(private orderEntryService: OrderEntryService) {
    }

    public addingOrderEntry = false;
    public orderEntries: OrderEntry[];

    close(orderEntry: OrderEntry) {
        this.addingOrderEntry = false;
        if (orderEntry) {
            this.getOrderEntries();
        }
    }

    getOrderEntries() {
        return this.orderEntryService.getOrderEntries().then(orderEntries => this.orderEntries = orderEntries);
    }

    addOrderEntry(detailView: OrderEntryDetailModalComponent) {
        this.addingOrderEntry = true;
        detailView.open(new OrderEntry());
    }

    ngOnInit() {
        this.getOrderEntries();
    }
}