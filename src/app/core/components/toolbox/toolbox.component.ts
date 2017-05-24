import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

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

	constructor() {

	}

	public searchCourse() {
		console.log(this.searchQuery);
	}
}
