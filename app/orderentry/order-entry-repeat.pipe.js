"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var OrderEntryRepeatPipe = (function () {
    function OrderEntryRepeatPipe() {
    }
    OrderEntryRepeatPipe.prototype.transform = function (value) {
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
    };
    OrderEntryRepeatPipe = __decorate([
        core_1.Pipe({ name: 'orderEntryRepeat' }), 
        __metadata('design:paramtypes', [])
    ], OrderEntryRepeatPipe);
    return OrderEntryRepeatPipe;
}());
exports.OrderEntryRepeatPipe = OrderEntryRepeatPipe;
//# sourceMappingURL=order-entry-repeat.pipe.js.map