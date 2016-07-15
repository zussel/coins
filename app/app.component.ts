import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
    selector: 'app-coins',
    templateUrl: 'app/app.components.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    title = "Coins";
    tagline = "Get to know where yout money is!";
}
