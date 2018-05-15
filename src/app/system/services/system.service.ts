import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { System } from "../models/System";

@Injectable()
export class SystemService {
	systemUrl = "/api/system";

  constructor(private http: HttpClient) { }

	getSystem(): Observable<System> {
	  return this.http.get<System>(this.systemUrl);
	}

	setSystem(system: System): Observable<any> {
		let httpOptions = {
		  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
		};

		return this.http.post(this.systemUrl, system, httpOptions);
	}
}
