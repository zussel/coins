import {BS_VIEW_PROVIDERS, MODAL_DIRECTIVES, ModalDirective} from "ng2-bootstrap/ng2-bootstrap";
import {CORE_DIRECTIVES} from "@angular/common";
import {Component, ViewChild} from "@angular/core";

@Component({
    selector: 'order-entry-detail-modal',
    directives: [MODAL_DIRECTIVES, CORE_DIRECTIVES],
    viewProviders:[BS_VIEW_PROVIDERS],
    templateUrl: 'app/order.entry.detail.modal.component.html'
})
export class OrderEntryDetailModalComponent {
    @ViewChild('childModal') public childModal: ModalDirective;

    public showChildModal():void {
        this.childModal.show();
    }

    public hideChildModal():void {
        this.childModal.hide();
    }
}