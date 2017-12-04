import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule, BsModalService } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { CreateAppointmentModalComponent } from './appointment-modal/appointment-modal.component';
import { LoginComponent } from './login/login.component';
import { SelectModule } from 'ng2-select';
import { HomeComponent } from './home/home.component';
import { AlertService, AuthenticationService, UserService } from './services/index'
import { HttpModule } from '@angular/http';
import { RegisterComponent } from './register/register.component'

const appRoutes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'register', component: RegisterComponent }
];

@NgModule({
	declarations: [
		LoginComponent,
		AppComponent,
		CreateAppointmentModalComponent,
		HomeComponent,
		RegisterComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		SelectModule,HttpModule,
		ModalModule.forRoot(),
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true } // <-- debugging purposes only
		)
	],
	providers: [
		BsModalService,
		AlertService,
		AuthenticationService,
		UserService
	],
	entryComponents: [
		CreateAppointmentModalComponent
	],
	exports: [

	],
	bootstrap: [AppComponent]
})
export class AppModule { }
