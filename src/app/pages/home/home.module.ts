// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// routes
import { routes } from './home.routes';

// custom components
import { HomeComponent } from './home.component';
import { CourseComponent } from './courses/course.component';

import { ToolboxModule } from '../../core/components/toolbox';

@NgModule({
	declarations: [
		HomeComponent,
		CourseComponent
	],
	imports: [
		routes,
		FormsModule,
		ToolboxModule,
		ReactiveFormsModule,
		CommonModule
	],
	providers: []
})
export class HomeModule {
	constructor() {
	}
}
