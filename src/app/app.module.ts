import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule, BsModalService} from 'ngx-bootstrap';
import { AppComponent, ModalContentComponent, HighlightDirective } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalContentComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot()
  ],
  providers: [
    BsModalService
  ],
  exports:[
    HighlightDirective
  ],
  entryComponents:[
    ModalContentComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
