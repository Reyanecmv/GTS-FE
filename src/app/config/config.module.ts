import { NgModule } from '@angular/core';

import { ConfigRoutingModule } from './config-routing.module';
import { ListComponent } from './config-list/list.component';
import { ConfigListComponent } from './config-create/config-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ListComponent, ConfigListComponent],
  imports: [
    SharedModule,
    ConfigRoutingModule
  ]
})
export class ConfigModule { }
