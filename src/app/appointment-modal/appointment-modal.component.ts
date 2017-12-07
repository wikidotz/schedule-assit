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
	appointmentCreated = false;

	appointment = {
		from: '',
		to: ''
	}
	mode:boolean;
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

	get selectedTimeFrom() {
		return [{
			id: this._selectecTimeFrom,
			text: this.timeLabel(this._selectecTimeFrom)
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
			text: this.timeLabel(this._selectedTimeTo)
		}]
	}

	timeLabel(t){
		let time = new Date(t);
		return time.toLocaleString('en-US', { hour: 'numeric', hour12: true })
	}

	set timeSlots(value) {
		if (value) {
			this.timeSlotFrom = []
			this.timeSlotTo = []
			for (var index = 0; index < value.length; index++) {
				var element = value[index];
				this.timeSlotFrom.push({
					id: element.from,
					text: this.timeLabel(element.from)
				})
				this.timeSlotTo.push({
					id: element.to,
					text: this.timeLabel(element.to)
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

	onConfirm(){
		
		this.appointmentCreated = true
	}

	

}