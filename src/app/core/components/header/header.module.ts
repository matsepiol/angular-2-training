import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [HeaderComponent],
	imports: [RouterModule, CommonModule],
	exports: [HeaderComponent],
	providers: []
})
export class HeaderModule {

	constructor() {
	}

}
