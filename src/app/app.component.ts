import { Component, ViewEncapsulation, ElementRef, HostListener } from '@angular/core';

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
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent {

	cities = [
		{ label: "Chatrapati Shivaji Terminus", value: "CST" },
		{ label: "Churchgate", value: "CGT" },
		{ label: "Masjid Bunder", value: "MJB" },
		{ label: "Marine Lines", value: "MRL" },
		{ label: "Sandhurst Road", value: "SDR" },
		{ label: "Charni Road	", value: "CNR" },
		{ label: "Byculla", value: "BYC" },
		{ label: "Dockyard Road", value: "DYR" }
	]

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

	isAvailable(person, time) {
		//time
		return 'available'
	}

	bsModalRef: BsModalRef;
	constructor(private modalService: BsModalService) {

		console.log(this.startTime);
		console.log(this.endTime);



		let difference = this.endTime.getHours() - this.startTime.getHours();
		//let t = this.startTime.getHours();

		this.timeSlots = Array(difference).fill(difference).map((x, i) => {
			var time = (this.startTime.getHours() + i) % 12;
			let time2 = Number(time+1)
			time = time==0 ? 12 : time;
			return time +' to ' + time2;
		})
	}

	openModalWithComponent() {
		this.bsModalRef = this.modalService.show(ModalContentComponent);
		this.bsModalRef.content.title = 'Add New Appointment';

	}
}

@Component({
	selector: 'modal-content',
	template: `
    <div class="modal-header">
      <h3 class="modal-title pull-left">{{title}}</h3>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <input class="form-control" placeholder="Client Name">
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-success " (click)="bsModalRef.hide()">Confirm </button>
      <button type="button" class="btn btn-secondary" (click)="bsModalRef.hide()">Close</button>
    </div>
  `
})
export class ModalContentComponent {
	title: string;
	list: any[] = [];
	constructor(public bsModalRef: BsModalRef) { }
}
