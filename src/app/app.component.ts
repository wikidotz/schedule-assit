import { Component, ViewEncapsulation, ElementRef, HostListener } from '@angular/core';
import { CreateAppointmentModalComponent } from './appointment-modal/appointment-modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent {

	constructor(private modalService: BsModalService) {

	}

}


