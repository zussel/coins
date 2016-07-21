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
var core_1 = require("@angular/core");
var _ = require('lodash');
var lang_1 = require("@angular/common/src/facade/lang");
var EnumPipe = (function () {
    function EnumPipe() {
    }
    EnumPipe.prototype.transform = function (enums, args) {
        var keys = [];
        _.each(enums, function (e) {
            if (lang_1.isNumber(e)) {
                keys.push({ key: e, value: enums[e] });
                // Uncomment if you want log
                console.log("enum member: ", enums[e]);
            }
        });
        return keys;
    };
    EnumPipe = __decorate([
        core_1.Pipe({ name: 'enums' }), 
        __metadata('design:paramtypes', [])
    ], EnumPipe);
    return EnumPipe;
}());
exports.EnumPipe = EnumPipe;
//# sourceMappingURL=enum.pipe.js.map