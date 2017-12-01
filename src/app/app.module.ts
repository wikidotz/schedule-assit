import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule, BsModalService} from 'ngx-bootstrap';
import { AppComponent, ModalContentComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot()
  ],
  providers: [
    BsModalService
  ],
  entryComponents:[
    ModalContentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
