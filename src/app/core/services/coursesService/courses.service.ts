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

	private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	}
}
