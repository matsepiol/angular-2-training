import { Component, ViewEncapsulation, Input, Output,
	EventEmitter, Inject, ChangeDetectionStrategy } from '@angular/core';

import { AuthService, LoaderService } from '../../core/services';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'login-page',
	templateUrl: 'login.template.html',
	styleUrls: ['./login.styles.scss'],
	providers: [],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
	public isLogged: boolean;
	public login: string;
	public pwd: string;

	@Output() private updateLogin = new EventEmitter<any>();

	constructor(public authService: AuthService) {
	}

	public logUserIn() {
		this.authService.logIn();
	}

}
