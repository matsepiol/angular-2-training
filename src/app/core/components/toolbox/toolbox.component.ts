import { Component, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CoursesService } from '../../services';

@Component({
	selector: 'toolbox',
	templateUrl: 'toolbox.component.html',
	styleUrls: ['./toolbox.component.scss'],
	providers: [],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class ToolboxComponent {
	public searchQuery: string;

	constructor(private courseService: CoursesService, private ref: ChangeDetectorRef) {

	}

	public searchCourse() {
		this.courseService.sortCoursesByName();
	}
}
