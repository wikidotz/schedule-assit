import { Component, ViewEncapsulation, ElementRef, HostListener } from '@angular/core';
import { CreateAppointmentModalComponent } from '../appointment-modal/appointment-modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { Directive } from '@angular/core';

@Directive({
	selector: '[appHighlight]'
})
export class HighlightDirective {
	@HostListener('mouseenter') onMouseEnter() {
		this.highlight('yellow');
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.highlight(null);
	}

	constructor(private el: ElementRef) {
		el.nativeElement.className = 'yellow';
	}

	private highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color;
	}
}


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


	items = [
		{
			name: 'Robert',
			id: 0
		},
		{
			name: 'Peter',
			id: 1
		}, {
			name: 'Sany',
			id: 2
		}, {
			name: 'John',
			id: 3
		}
	];

	randomClass() {
		//time
		return Math.round(Math.random() * 1) == 1 ? 'available' : 'booked';
	}

	getCSSClass(t){
		if(t.from<5){
			return 'available'
		}else{
			return 'booked'
		}
	}

	bsModalRef: BsModalRef;

	constructor(private modalService: BsModalService) {

		let difference = this.endTime.getHours() - this.startTime.getHours();

		this.timeSlots = Array(difference).fill(difference).map((x, i) => {
			let time = {
				from: (this.startTime.getHours() + i) % 12,
				to: Number((this.startTime.getHours() + i) % 12) + 1
			}
			return time;
		})
	}

	openModalWithComponent(time, mode) {
		this.bsModalRef = this.modalService.show(CreateAppointmentModalComponent);
		this.bsModalRef.content.selectedTimeFrom = time.from
		this.bsModalRef.content.selectedTimeTo = time.to
		this.bsModalRef.content.timeSlots = this.timeSlots
		this.bsModalRef.content.title = mode+' Appointment';
		this.bsModalRef.content.mode = mode;

	}
}


