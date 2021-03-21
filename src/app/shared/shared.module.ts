import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [],
	exports: [
		CommonModule,
		HttpClientModule,
		DropdownModule,
		InputTextModule,
		ReactiveFormsModule,
	],
	imports: [
		CommonModule,
		HttpClientModule,
		DropdownModule,
		InputTextModule,
		ReactiveFormsModule,
	]
})
export class SharedModule {
}
