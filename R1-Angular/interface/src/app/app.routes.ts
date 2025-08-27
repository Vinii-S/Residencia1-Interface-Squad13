import { Routes } from '@angular/router';
import { TestesComponent } from './testes-component/testes-component';
import { HomeComponent } from './home-component/home-component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "testes", component: TestesComponent}
];
