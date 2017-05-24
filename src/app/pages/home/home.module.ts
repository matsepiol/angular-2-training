// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './home.routes';

// custom components
import { HomeComponent } from './home.component';

//custom directives
import { courseBorderDirective } from '../../core/directives';

//custion pipes
import { durationPipe } from '../../core/pipes';

import { ToolboxModule } from '../../core/components/toolbox';
import { ModalModule } from '../../core/components/modal';
import { CourseComponent } from './courses/course.component';

@NgModule({
	declarations: [
		HomeComponent,
		CourseComponent,
		courseBorderDirective,
		durationPipe
	],
	imports: [
		routes,
		FormsModule,
		ToolboxModule,
		ModalModule,
		ReactiveFormsModule,
		CommonModule
	],
	exports: [
		HomeComponent
	],
	providers: []
})
export class HomeModule {
	constructor() {
	}
}
