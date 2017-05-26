import { Injectable } from '@angular/core';
import { Response, Request, RequestOptions, RequestMethod, Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs/Observer';

import { Course } from '../../entities';
import { orderByPipe } from '../../pipes';

@Injectable()
export class CoursesService {
	public courses: Observable<Course[]>;
	private data: Course[] = require('../../../../assets/mock-data/courses');
	private observer: Observer<any>;

	constructor(private orderByPipe: orderByPipe) {
		this.courses = new Observable<Course[]>((observer) => {
			this.observer = observer;
		}).share();
	}

	public getCourses() {
		this.observer.next(this.data);
	}

	public sortCoursesByName() {
		this.orderByPipe.transform(this.data, 'title');
	}

	public createCourse(course): Course[] {
		this.data.push(course);
		return this.data;
	}

	public getCourse(id): Object {
		let course = this.data.filter( (el) => {
			return el.id === id;
		});

		return course;
	}

	public updateCourse(course): Object {
		return course;
	}

	public removeCourse(id): Course[] {
		this.data = this.data.filter( (el) => {
			return el.id !== id;
		});

		return this.data;
	}
}
