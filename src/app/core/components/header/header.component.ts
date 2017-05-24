import { Component, ViewEncapsulation, OnInit, OnDestroy,
	Inject, Input, Output, EventEmitter,
	ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { AuthService } from '../../services';

@Component({
	selector: 'main-header',
	templateUrl: 'header.component.html',
	styleUrls: ['./header.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit, OnDestroy {
	public loggedIn: boolean = false;
	private subscription: any;

	constructor(private authService: AuthService, private ref: ChangeDetectorRef) {
	}

	public ngOnInit() {
		this.subscription = this.authService.status.subscribe((status) => {
			this.loggedIn = status;
			this.ref.markForCheck();
		});
	}

	public logUserOut() {
		this.authService.logOut();
	}

	public ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
