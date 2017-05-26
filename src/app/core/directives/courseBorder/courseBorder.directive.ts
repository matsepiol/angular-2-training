import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
	selector: '[courseBorder]'
})

export class CourseBorderDirective implements OnInit {
	@Input() public course: any;

	constructor(private el: ElementRef) {

	}

	public ngOnInit() {
		let millisecondsPerDay = 24 * 60 * 60 * 1000,
			edgeDay = 14,
			today = new Date,
			startDate = new Date(this.course.startDate),
			diff = today.valueOf() - startDate.valueOf(),
			daysDiff = Math.floor(diff / millisecondsPerDay),
			targetEl = this.el.nativeElement.querySelector('.course');

		if (daysDiff > edgeDay) {
			targetEl.style.borderColor = 'blue';
		} else {
			targetEl.style.borderColor = 'green';
		}
	}
}
