import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigCreateComponent } from './config-create/config-create.component';
import { ConfigListComponent } from './config-list/config-list.component';

const routes: Routes = [
  {
    path: 'create',
    component: ConfigCreateComponent
  },
  {
    path: 'list',
    component: ConfigListComponent
  },
  { path: '**', redirectTo: '/config/list'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
