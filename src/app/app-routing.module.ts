import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [{
	path: 'alerts',
	loadChildren: () => import('./alerts/alerts.module').then(m => m.AlertsModule)
	},
	{
		path: 'config',
		loadChildren: () => import('./config/config.module').then(m => m.ConfigModule)
	},
	{
		path: 'reporting',
		loadChildren: () => import('./reporting/reporting.module').then(m => m.ReportingModule)
	}
	];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
