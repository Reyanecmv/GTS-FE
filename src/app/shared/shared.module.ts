import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [],
	exports: [
		CommonModule,
		HttpClientModule,
	],
	imports: [
		CommonModule,
		HttpClientModule,
	]
})
export class SharedModule {
}
