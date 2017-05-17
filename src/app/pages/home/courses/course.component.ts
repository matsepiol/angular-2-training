import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../core/entities';

@Component({
	selector: 'course',
	templateUrl: 'course.component.html',
	styles: [require('./course.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class CourseComponent {
	@Input() public course: Course;
	@Output('delete') public delete = new EventEmitter();
	constructor() {
	}

	public deleteCourse() {
		this.delete.emit({
			course: this.course
		});
	}

}
