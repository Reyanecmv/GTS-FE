import { NgModule } from '@angular/core';

import { ReportingRoutingModule } from './reporting-routing.module';
import { CreateReportComponent } from './create-report/create-report.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CreateReportComponent],
  imports: [
    SharedModule,
    ReportingRoutingModule
  ]
})
export class ReportingModule { }
