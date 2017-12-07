import { Component, ViewEncapsulation, ElementRef, HostListener } from '@angular/core';
import { CreateAppointmentModalComponent } from '../appointment-modal/appointment-modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { salesPersons } from '../data/index'
import { AppointmentService } from '../services/index'
import { ISalesPerson } from '../interfaces/index'
import { Directive } from '@angular/core';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {

	today = new Date();
	startTime = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate(), 10, 0, 0, 0)
	endTime = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate(), 22, 0, 0, 0)

	timeSlots = [];

	items: ISalesPerson[];

	bsModalRef: BsModalRef;

	_slot: number = 1;

	set slot (value){
		this._slot = value;
	}

	get slot ():number{
		return this._slot;
	}

	constructor(private modalService: BsModalService, public appointmentService: AppointmentService) {

		let difference = this.endTime.getHours() - this.startTime.getHours();
		difference = Math.ceil(difference / this.slot);

		let time1 = new Date(this.startTime.getTime());
		let time2 = new Date(this.startTime.getTime());

		this.timeSlots = Array(difference).fill(difference).map((x, i) => {

			time1.setHours(time2.getHours());
			time2.setHours(Math.min(this.endTime.getHours(), time1.getHours() + this.slot));

			return {
				from: time1.toLocaleString('en-US', { hour: 'numeric', hour12: true }),
				fromDate: time1.getTime(),
				to: time2.toLocaleString('en-US', { hour: 'numeric', hour12: true }),
				toDate: time2.getTime()
			};

		})

		this.items = appointmentService.getSalesPerson();
	}

	

	openModalWithComponent(time, mode) {
		this.bsModalRef = this.modalService.show(CreateAppointmentModalComponent);
		this.bsModalRef.content.selectedTimeFrom = time.fromDate
		this.bsModalRef.content.selectedTimeTo = time.toDate
		this.bsModalRef.content.timeSlots = this.timeSlots
		this.bsModalRef.content.title = mode + ' Appointment';
		this.bsModalRef.content.mode = mode;

	}
}