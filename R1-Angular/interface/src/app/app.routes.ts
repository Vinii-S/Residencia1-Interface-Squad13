import { Routes } from '@angular/router';
import { TestesComponent } from './testes-component/testes-component';
import { HomeComponent } from './home-component/home-component';
import { BackendComponent } from './backend-component/backend-component';
import { DocumentacaoComponent } from './documentacao-component/documentacao-component';
import { ConfigComponent } from './config-component/config-component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "testes", component: TestesComponent},
    {path: "backend", component: BackendComponent},
    {path: "documentacao", component: DocumentacaoComponent},
    {path: "configuracao", component: ConfigComponent}
];
