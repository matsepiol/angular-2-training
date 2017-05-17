import { NgModule } from '@angular/core';
import { ToolboxComponent } from './toolbox.component';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

@NgModule({
	declarations: [ToolboxComponent],
	imports: [RouterModule, FormsModule],
	exports: [ToolboxComponent]
})
export class ToolboxModule {
	constructor() {
	}
}
