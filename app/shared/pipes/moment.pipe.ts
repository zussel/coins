import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import {isString} from "@angular/platform-browser/src/facade/lang";

@Pipe({name: 'moment'})
export class MomentPipe implements PipeTransform {

    transform(value:moment.Moment, ...args):string {
        if (!value) {
            return '';
        } else if (isString(value)) {
            return moment(value).format('DD.MM.YYYY');
        } else if (value.isValid()) {
            return value.format('DD.MM.YYYY');
        } else {
            return '';
        }
    }
}