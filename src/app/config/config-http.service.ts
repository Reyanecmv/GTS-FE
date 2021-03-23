import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rule } from './models/rule.model';

@Injectable()
export class ConfigHttpService {

  constructor(private http: HttpClient) { }

  public getRules():Observable<Rule[]> {
    return this.http.get<Rule[]>('http://localhost:8001/api/properties');
  }

  public saveRule(rule: Rule): Observable<string> {
    return this.http.put<string>('http://localhost:8001/api/property', rule);
  }

  public deleteRule(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:8001/api/property?id=${id}`)
  }
}
