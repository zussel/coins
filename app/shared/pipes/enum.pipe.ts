import {PipeTransform, Pipe} from "@angular/core";
import * as _ from 'lodash';
import {isNumber} from "@angular/common/src/facade/lang";

@Pipe({name: 'enums'})
export class EnumPipe implements PipeTransform {
    transform(enums, args:string[]) : any {
        let keys = [];
        _.each(enums, function (e) {
            if (isNumber(e)) {
                keys.push({key: e, value: enums[e]});
                // Uncomment if you want log
                // console.log('key: ', e, 'value: ', enums[e]);
            }
        });
        return keys;
    }
}