import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule, BsModalService} from 'ngx-bootstrap';
import { AppComponent, HighlightDirective } from './app.component';
import { CreateAppointmentModalComponent } from './appointment-modal/appointment-modal.component';
import { SelectModule } from 'ng2-select';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CreateAppointmentModalComponent
  ],
  imports: [
    BrowserModule,
    SelectModule,
    ModalModule.forRoot()
  ],
  providers: [
    BsModalService
  ],
  entryComponents:[
    CreateAppointmentModalComponent
  ],
  exports:[
    HighlightDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
