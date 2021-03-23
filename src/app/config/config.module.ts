import { NgModule } from '@angular/core';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigCreateComponent } from './config-create/config-create.component';
import { SharedModule } from '../shared/shared.module';
import { ConfigHttpService } from './config-http.service';
import { ConfigService } from './config.service';
import { ConfigListComponent } from './config-list/config-list.component';


@NgModule({
  declarations: [ConfigCreateComponent, ConfigListComponent],
	imports: [
		SharedModule,
		ConfigRoutingModule
	],
	providers: [ConfigHttpService, ConfigService]
})
export class ConfigModule { }
