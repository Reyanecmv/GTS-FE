import { NgModule } from '@angular/core';

import { AlertsRoutingModule } from './alerts-routing.module';
import { AlertListComponent } from './alert-list/alert-list.component';
import { SharedModule } from '../shared/shared.module';
import { AlertService } from './alert.service';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [AlertListComponent],
  imports: [
    SharedModule,
    AlertsRoutingModule,
    SharedModule,
    TableModule
  ],
  providers: [AlertService]
})
export class AlertsModule { }
