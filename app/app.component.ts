import {Component, ViewContainerRef} from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
    selector: 'app-coins',
    templateUrl: 'app/app.components.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    title = "Coins";
    tagline = "Get to know where your money is!";

    viewContainerRef: ViewContainerRef;

    constructor(viewContainerRef:ViewContainerRef) {
        // You need this small hack in order to catch application root view container ref
        this.viewContainerRef = viewContainerRef;
    }
}
