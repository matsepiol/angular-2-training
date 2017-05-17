import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';

export const ROUTES: Routes = [
	{path: '', component: HomeComponent},
	{path: 'courses', component: HomeComponent}
];
