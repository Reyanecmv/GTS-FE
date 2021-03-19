import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AlertModel, AlertTypes } from './models/alert.model';

@Injectable()
export class AlertService {

	constructor(private http: HttpClient) {
	}

	public getAlerts(): Observable<AlertModel[]>{
		// return this.http.get<AlertModel[]>('ceva URL de inlocuit');
		return of([
			{
				dateCreated: new Date(),
				alertType: AlertTypes.AccessControl,
				properties: '{ceva proprietati formatate}'
			},
			{
				dateCreated: new Date(),
				alertType: AlertTypes.AccessControl,
				properties: '{ceva proprietati formatate}'
			},
			{
				dateCreated: new Date(),
				alertType: AlertTypes.AccessControl,
				properties: '{ceva proprietati formatate}'
			},
			{
				dateCreated: new Date(),
				alertType: AlertTypes.AccessControl,
				properties: '{ceva proprietati formatate}'
			},
			{
				dateCreated: new Date(),
				alertType: AlertTypes.AccessControl,
				properties: '{ceva proprietati formatate}'
			},
			{
				dateCreated: new Date(),
				alertType: AlertTypes.AccessControl,
				properties: '{ceva proprietati formatate}'
			},
			{
				dateCreated: new Date(),
				alertType: AlertTypes.AccessControl,
				properties: '{ceva proprietati formatate}'
			},
			{
				dateCreated: new Date(),
				alertType: AlertTypes.AccessControl,
				properties: '{ceva proprietati formatate}'
			},
			{
				dateCreated: new Date(),
				alertType: AlertTypes.AccessControl,
				properties: '{ceva proprietati formatate}'
			},
			{
				dateCreated: new Date(),
				alertType: AlertTypes.AccessControl,
				properties: '{ceva proprietati formatate}'
			},
			{
				dateCreated: new Date(),
				alertType: AlertTypes.AccessControl,
				properties: '{ceva proprietati formatate}'
			},
			{
				dateCreated: new Date(),
				alertType: AlertTypes.AccessControl,
				properties: '{ceva proprietati formatate}'
			},
			{
			dateCreated: new Date(),
				alertType: AlertTypes.AccessControl,
				properties: '{ceva proprietati formatate}'
			},
			{
				dateCreated: new Date(),
				alertType: AlertTypes.AccessControl,
				properties: '{ceva proprietati formatate}'
			},
			{
				dateCreated: new Date(),
				alertType: AlertTypes.AccessControl,
				properties: '{ceva proprietati formatate}'
			},
		])
	}
}
