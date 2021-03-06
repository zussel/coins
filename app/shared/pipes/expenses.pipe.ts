import { Pipe, PipeTransform } from '@angular/core';

import {OrderEntry} from "../../orderentry/order-entry";

@Pipe({ name: 'expenses' })
export class ExpensesPipe implements PipeTransform {
    transform(orderEntries: OrderEntry[]) {
        return orderEntries.filter(orderEntry => orderEntry.ranges[0].value < 0);
    }
}
