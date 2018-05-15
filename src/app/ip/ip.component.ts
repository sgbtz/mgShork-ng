import { Component, OnInit } from '@angular/core';

import { IpService } from "./services/ip.service";

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css']
})
export class IpComponent implements OnInit {
	ipTable;
	displayedColumns = ["ipRouteDest", "ipRouteIfIndex", "ipRouteMetric", "ipRouteNextHop",
										 "ipRouteType", "ipRouteProto", "ipRouteAge", "ipRouteMask"]

  constructor(private ipService: IpService) { }

  ngOnInit() {
  	this.ipService.getInterfaces()
	    .subscribe((ipTable) => this.ipTable = ipTable);
  }

}
