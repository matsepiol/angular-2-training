import { Injectable } from '@angular/core';
import { Response, Request, RequestOptions, RequestMethod, Http } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

import { Course } from '../../entities';

@Injectable()
export class CoursesService {

	private data: Course[] = require('../../../../assets/mock-data/courses');

	constructor(private http: Http) {
	}

	public getCourses(): Course[] {
		return this.data;
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
