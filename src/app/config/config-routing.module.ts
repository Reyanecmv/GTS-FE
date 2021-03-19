import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigListComponent } from './config-create/config-list.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
