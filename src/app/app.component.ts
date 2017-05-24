/*
 * Angular 2 decorators and services
 */
import {
	Component,
	OnInit,
	OnDestroy,
	ViewEncapsulation,
	ChangeDetectionStrategy,
	NgZone,
	ChangeDetectorRef
} from '@angular/core';
import { AppState } from './app.service';
import { AuthService, LoaderService } from './core/services';

/*
 * App Component
 * Top Level Component
 */
@Component({
	selector: 'app',
	encapsulation: ViewEncapsulation.None,
	styleUrls: [
		'./styles/vendors.scss',
		'./styles/index.scss',
		'./app.styles.scss'
	],
	providers: [AuthService, LoaderService],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './app.template.html'
})
export class AppComponent implements OnInit, OnDestroy {
	public loggedIn: boolean;
	public objLoaderStatus: boolean = false;
	private subscription: any;

	constructor(
		private _ngZone: NgZone,
		private loaderService: LoaderService,
		private authService: AuthService,
		private ref: ChangeDetectorRef) {

			_ngZone.onStable.subscribe(this.onZoneStable);
			_ngZone.onUnstable.subscribe(this.onZoneUnstable);
			this.objLoaderStatus = false;
	}

	public ngOnInit() {
		this.subscription = this.authService.status.subscribe((status) => {
			this.loggedIn = status;
			this.objLoaderStatus = this.loggedIn;
			this.ref.markForCheck();
		});

		this._ngZone.run( () => {
			this.loaderService.loaderStatus.subscribe((val: boolean) => {
				this.objLoaderStatus = val;
				this.ref.markForCheck();
			});
		});

	}

	public onZoneStable() {
		// console.log('stable');
		// console.log(new Date().getTime());
	}

	public onZoneUnstable() {
		// console.log('unstable');
		// console.log(new Date().getTime());
	}

	public ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
