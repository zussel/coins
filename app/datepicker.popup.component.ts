import {Component, Input, Output, Self, OnInit} from "@angular/core";
import {DATEPICKER_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import moment = require("moment/moment");
import {EventEmitter} from "@angular/forms/src/facade/async";

@Component({
    selector: 'datepicker-popup',
    directives: [DATEPICKER_DIRECTIVES],
    templateUrl: 'app/datepicker.popup.component.html',
    styleUrls: ['app/datepicker.popup.component.css']
})
export class DatepickerPopupComponent implements OnInit {
    @Input() placeholder: string;

    @Input() date: moment.Moment;
    @Output() dateChange: EventEmitter<moment.Moment> = new EventEmitter<moment.Moment>();

    private showPopup: boolean = false;
    private value: Date;
    private dateString: string;

    show() {
        this.showPopup = true;
    }

    hide() {
        this.date = moment(this.value);
        this.dateString = this.date.format('DD.MM.YYYY');
        this.dateChange.emit(this.date);
        this.showPopup = false;
    }

    ngOnInit() {
        if (this.date && this.date.isValid()) {
            this.value = this.date.toDate();
            this.dateString = this.date.format('DD.MM.YYYY');
        }
    }
}