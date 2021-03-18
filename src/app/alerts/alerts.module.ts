import { NgModule } from '@angular/core';

import { AlertsRoutingModule } from './alerts-routing.module';
import { AlertListComponent } from './alert-list/alert-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AlertListComponent],
  imports: [
    SharedModule,
    AlertsRoutingModule
  ]
})
export class AlertsModule { }
