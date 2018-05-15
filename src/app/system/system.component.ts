import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { System } from "./models/System";

import { SystemService } from "./services/system.service";

@Component({
  selector: 'system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
	system: System = new System();

  constructor(
  	private systemService: SystemService,
  	private snackBar: MatSnackBar) { }

  ngOnInit() {
  	this.systemService.getSystem()
	    .subscribe((system: System) => { 
	    	this.system.description = system[0];
	    	this.system.upTime = system[1];
	    	this.system.contact = system[2];  
	    	this.system.name = system[3];
	    	this.system.location = system[4];
	    });
  }

  openSnackBar(success) {
  	let message = success ? "System info saved!" : "System info couldn't be saved...";
  	if (success) {
  		
  	}
    this.snackBar.open(message, "close", { duration: 2000 });
  }

  setSystem() {
  	this.systemService.setSystem(this.system)
  		.subscribe((result) => this.openSnackBar(result.success));
  }

}
