import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'orderEntryRepeat'})
export class OrderEntryRepeatPipe implements PipeTransform {

    transform(value:number):string {
        switch (value) {
            case 0: return 'einmalig';
            case 1: return 'wöchentlich';
            case 2: return 'zwei-wöchentlich';
            case 3: return 'monatlich';
            case 4: return 'zwei-monatlich';
            case 5: return 'viertel-jährlich';
            case 6: return 'halb-jährlich';
            case 7: return 'jährlich';
            default: return 'unbekannt';
        }
    }
}
