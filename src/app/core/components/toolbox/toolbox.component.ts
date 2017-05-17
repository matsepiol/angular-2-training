import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'toolbox',
	templateUrl: 'toolbox.component.html',
	styles: [require('./toolbox.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class ToolboxComponent {
	public searchQuery: string;

	constructor() {

	}

	public searchCourse() {
		console.log(this.searchQuery);
	}
}
