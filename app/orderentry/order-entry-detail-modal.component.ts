import {BS_VIEW_PROVIDERS, MODAL_DIRECTIVES, ModalDirective, DATEPICKER_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import {CORE_DIRECTIVES} from "@angular/common";
import {Component, ViewChild, Input} from "@angular/core";
import {OrderEntry, EntryRepeat, OrderEntryRange} from "./order-entry";
import {EnumPipe} from "../shared/pipes/enum.pipe";
import {MomentPipe} from "../shared/pipes/moment.pipe";
import {OrderEntryRepeatPipe} from "./order-entry-repeat.pipe";
import {DatepickerPopupComponent} from "../shared/components/datepicker-popup.component";
import * as _ from 'lodash';
import moment = require("moment/moment");

@Component({
    selector: 'order-entry-detail-modal',
    directives: [
        MODAL_DIRECTIVES,
        CORE_DIRECTIVES,
        DATEPICKER_DIRECTIVES,
        DatepickerPopupComponent
    ],
    viewProviders:[BS_VIEW_PROVIDERS],
    templateUrl: 'app/orderentry/order-entry-detail-modal.component.html',
    exportAs: 'orderEntryDetail',
    pipes: [EnumPipe, MomentPipe, OrderEntryRepeatPipe]
})
export class OrderEntryDetailModalComponent {
    @ViewChild('lgModal') public lgModal: ModalDirective;
    @Input() public orderEntry: OrderEntry;

    public repeats = EntryRepeat;
    public addingRange = false;
    public showDatepicker = false;

    public show():void {
        if (_.isEmpty(this.orderEntry.ranges)) {
            this.orderEntry.ranges.push(new OrderEntryRange(0));
            this.addingRange = true;
        }
        this.lgModal.show();
    }

    public save() {
        console.log('saved order entry: ', this.orderEntry);
        this.lgModal.hide();
    }

    public addRange() {
        let successor = _.first(this.orderEntry.ranges);

        if (!successor) {
            this.orderEntry.ranges.push(new OrderEntryRange(0));
        } else if (successor.to && successor.to.isValid()) {
            this.orderEntry.ranges.unshift(new OrderEntryRange(successor.value, successor.to.clone().add(1, 'day')));
        } else {
            this.orderEntry.ranges.unshift(new OrderEntryRange(successor.value));
        }
        this.addingRange = true;
    }

    public cancelRange() {
        this.orderEntry.ranges.splice(0, 1);
        this.addingRange = false;
    }

    public saveRange() {
        if (this.orderEntry.ranges.length > 1) {
            this.orderEntry.ranges[0].to = _.first(this.orderEntry.ranges).from.clone().subtract(1, 'day');
        }
        this.addingRange = false;
    }

    public hidePopup() {
        this.showDatepicker = false;
    }

    public isValidRange(range: OrderEntryRange) {
        let successor = _.first(this.orderEntry.ranges);

        if (!range.from) {
            return false;
        } else if (!successor) {
            return true;
        } else if ((!successor.to || !successor.to.isValid()) && range.from.isSameOrBefore(successor.from)) {
            return false;
        } else if (successor.to && range.from.isBefore(successor.to)) {
            return false;
        } else if (range.to && range.from.isSameOrAfter(range.to)) {
            return false;
        }
        return true;
    }
}