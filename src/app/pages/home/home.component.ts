import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';

import { CoursesService } from '../../core/services';
import { Course } from '../../core/entities';

@Component({
	selector: 'home',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./home.styles.scss')],
	template: require('./home.template.html')
})
export class HomeComponent implements OnInit {
	private courses: Course[];
	private isLoading: boolean = false;

	constructor(private todoService: CoursesService) {
		console.log('Home page constructor');

		this.courses = [];
	}

	public ngOnInit() {
		console.log('Home page init');

		this.isLoading = true;
		this.courses = this.todoService.getCourses();
		this.isLoading = false;
	}

	public deleteCourse($event) {
		this.courses = this.courses.filter( (course) => {
			return course.id !== $event.course.id;
		});
	}
}
