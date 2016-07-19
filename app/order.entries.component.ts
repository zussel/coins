import {OrderEntryService} from "./order.entry.service";
import {OrderEntryEstimateService} from "./order.entry.estimate.service";
import {OrderEntryRepeatPipe} from "./order.entry.repeat.pipe";
import {MomentPipe} from "./moment.pipe";
import {OnInit, Component, ViewChild} from "@angular/core";
import {OrderEntry} from "./order.entry";
import {ModalDirective, MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from "ng2-bootstrap/ng2-bootstrap";
import {CORE_DIRECTIVES} from "@angular/common";
import {OrderEntryDetailModalComponent} from "./order.entry.detail.modal.component";

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
    ],
    directives: [MODAL_DIRECTIVES, CORE_DIRECTIVES, OrderEntryDetailModalComponent],
    viewProviders:[BS_VIEW_PROVIDERS]
})
export class OrderEntriesComponent implements OnInit {
    constructor(private orderEntryService: OrderEntryService,
                private orderEntryEstimateService: OrderEntryEstimateService) {}

    @ViewChild('lgModal') public childModal: ModalDirective;

    public current: OrderEntry = new OrderEntry();

    public showChildModal(orderEntry: OrderEntry):void {
        this.current = orderEntry;
        this.childModal.show();
    }

    public hideChildModal():void {
        this.childModal.hide();
    }

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