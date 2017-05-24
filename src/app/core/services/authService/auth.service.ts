import { Injectable } from '@angular/core';
import { Response, Request, RequestOptions, RequestMethod, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/share';

@Injectable()
export class AuthService {
	public status: Observable<boolean>;
	private observer: Observer<boolean>;

	constructor() {
		this.status = new Observable<boolean>((observer) => {
			this.observer = observer;
		}).share();
	}

	public logIn() {
		if (this.observer !== undefined) {
			this.observer.next(true);
		}
	}

	public logOut() {
		if (this.observer !== undefined) {
			this.observer.next(false);
		}
	}
}
