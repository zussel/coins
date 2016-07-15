import {Component} from '@angular/core';
import {OrderEntryService} from "./order.entry.service";

@Component({
    selector: 'order-entry-estimate',
    templateUrl: 'app/order.entry.estimate.html',
    providers: [ OrderEntryService ]
})
export class OrderEntryEstimate {

}