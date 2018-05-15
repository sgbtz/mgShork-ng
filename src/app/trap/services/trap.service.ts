import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Trap } from "../models/Trap";

@Injectable()
export class TrapService {
	systemUrl = "/api/trap";

  constructor(private http: HttpClient) { }

	getTraps(): Observable<Trap[]> {
	  return this.http.get<Trap[]>(this.systemUrl);
	}

}
