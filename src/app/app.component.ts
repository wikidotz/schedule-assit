import { Component, ViewEncapsulation } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {


  items = [
    {
      name: 'Robert'
    },
    {
      name: 'Peter'
    }, {
      name: 'Sany'
    }, {
      name: 'John'
    }
  ]

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModalWithComponent() {
    const list = [

    ];
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
