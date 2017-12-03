import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
	selector: 'app-appointment-modal',
	templateUrl: './appointment-modal.component.html',
	styleUrls: ['./appointment-modal.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class CreateAppointmentModalComponent implements OnInit {
	cities = [
		{ text: "Chatrapati Shivaji Terminus", id: "CST" },
		{ text: "Churchgate", id: "CGT" },
		{ text: "Masjid Bunder", id: "MJB" },
		{ text: "Marine Lines", id: "MRL" },
		{ text: "Sandhurst Road", id: "SDR" },
		{ text: "Charni Road	", id: "CNR" },
		{ text: "Byculla", id: "BYC" },
		{ text: "Dockyard Road", id: "DYR" }
	]
	title: string;
	list: any[] = [];

	timeSlotFrom = [];
	timeSlotTo = [];

	_selectecTimeFrom;

	set selectedTimeFrom(value) {
		if (value) {
			this._selectecTimeFrom = value
		}

	}

	get selectedTimeFrom() {
		return [{
			id: this._selectecTimeFrom,
			text: this._selectecTimeFrom
		}]
	}

	_selectedTimeTo;

	set selectedTimeTo(value) {
		if (value) {
			this._selectedTimeTo = value
		}
	}

	get selectedTimeTo() {
		return [{
			id: this._selectedTimeTo,
			text: this._selectedTimeTo
		}]
	}

	set timeSlots(value) {
		if (value) {
			this.timeSlotFrom = []
			this.timeSlotTo = []
			for (var index = 0; index < value.length; index++) {
				var element = value[index];
				this.timeSlotFrom.push({
					id: element.from,
					text: element.from
				})
				this.timeSlotTo.push({
					id: element.to,
					text: element.to
				})
			}
		}
	}


	selected(event) {

	}
	constructor(public bsModalRef: BsModalRef) {

	}

	ngOnInit() {

	}

}