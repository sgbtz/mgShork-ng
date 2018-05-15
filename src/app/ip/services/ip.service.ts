import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class IpService {
	ipUrl = "/api/ip";

  constructor(private http: HttpClient) { }

	getInterfaces(): Observable<any> {
	  return this.http.get(this.ipUrl);
	}
}