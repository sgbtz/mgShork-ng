import { Component, OnInit } from '@angular/core';

import { Interface } from "./models/Interface";

import { InterfacesService } from "./services/interfaces.service";

@Component({
  selector: 'interfaces',
  templateUrl: './interfaces.component.html',
  styleUrls: ['./interfaces.component.css']
})
export class InterfacesComponent implements OnInit {
	interfaces;
	displayedColumns = [ "ifIndex", "ifType", "ifSpeed", "ifPhysAddress",
											"ifOperStatus", "ifLastChange", "ifInOctets", "ifInPkts",
                      "ifOutOctets", "ifOutPkts","ifDiscards", "ifErrors" ]

  constructor(private interfacesService: InterfacesService) { }

  ngOnInit() {
  	this.interfacesService.getInterfaces()
	    .subscribe((interfaces) => this.interfaces = interfaces);
  }

}
