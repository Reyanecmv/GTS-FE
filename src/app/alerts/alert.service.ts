import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AlertDTO } from './models/alert.model';

@Injectable()
export class AlertService {

	constructor(private http: HttpClient) {
	}

	public getAlerts(): Observable<AlertDTO[]>{
		return this.http.get<AlertDTO[]>('http://localhost:8001/api/alerts');
	}
}
