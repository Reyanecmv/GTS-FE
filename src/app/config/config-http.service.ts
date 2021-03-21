import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rule } from './models/rule.model';

@Injectable()
export class ConfigHttpService {

  constructor(private http: HttpClient) { }

  public getRule(id: string):Observable<Rule> {
    return this.http.get<Rule>('url');
  }

  public saveRule(rule: Rule): Observable<string> {
    return this.http.post<string>('url', rule);
  }

  public deleteRule(id: string): Observable<void> {
    return this.http.delete<void>('url')
  }
}
