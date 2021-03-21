import { NgModule } from '@angular/core';

import { ConfigRoutingModule } from './config-routing.module';
import { ListComponent } from './config-list/list.component';
import { ConfigListComponent } from './config-create/config-list.component';
import { SharedModule } from '../shared/shared.module';
import { ConfigHttpService } from './config-http.service';
import { ConfigService } from './config.service';


@NgModule({
  declarations: [ListComponent, ConfigListComponent],
	imports: [
		SharedModule,
		ConfigRoutingModule
	],
	providers: [ConfigHttpService, ConfigService]
})
export class ConfigModule { }
