import { Component, ViewEncapsulation, OnInit,
	OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { CoursesService, AuthService, LoaderService } from '../../core/services';

import { Course } from '../../core/entities';

@Component({
	selector: 'home-page',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styleUrls: ['./home.styles.scss'],
	templateUrl: './home.template.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent implements OnInit {
	public isLoading: boolean = false;
	private courses: Course[];
	private subscription: any;

	constructor(
		private coursesService: CoursesService,
		private loaderService: LoaderService,
		private authService: AuthService,
		private ref: ChangeDetectorRef) {

		console.log('Home page constructor');
		this.courses = [];
	}

	public ngOnInit() {
		console.log('Home page init');

		this.subscription = this.coursesService.courses.subscribe((courses) => {
			this.courses = courses;
			this.ref.markForCheck();
		});

		this.coursesService.getCourses();

		setTimeout( () => {
			this.loaderService.displayLoader(false);
		}, 1000);
	}

	public deleteCourse($event) {
		this.loaderService.displayLoader(true);

		setTimeout( () => {
			let courseId = $event.course.id;
			this.courses = this.coursesService.removeCourse(courseId);
			this.loaderService.displayLoader(false);
			this.ref.markForCheck();
		}, 1000 );

	}

}
