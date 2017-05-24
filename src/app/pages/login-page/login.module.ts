// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// custom components
import { LoginComponent } from './login.component';

@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule
	],
	exports: [
		LoginComponent
	],
	providers: []
})

export class LoginModule {
	constructor() {
	}
}
