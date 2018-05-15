import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Trap } from "./models/Trap";

import { TrapService } from "./services/trap.service";


@Component({
  selector: 'app-trap',
  templateUrl: './trap.component.html',
  styleUrls: ['./trap.component.css']
})
export class TrapComponent implements OnInit {
	trap_list: Trap[];
  trapType = ["Cold Start", "Warm Start", "Link Down", "Link Up",
             "Authentication Failure", "EGP Neibor Loss", "Enterprise Specific"];
  displayedColumns = ["trapType", "timeStamp"];

  constructor(
    private trapService: TrapService,
    private router: Router) { }

  ngOnInit() {
  	this.trapService.getTraps()
	    .subscribe((trap_list) => { 
	    	this.trap_list = trap_list;
	    	console.log(this.trap_list)
	    	console.log(trap_list)
	    });
  }

  refresh(){
    this.router.navigateByUrl('/home', {skipLocationChange: true}).then( ()=> this.router.navigate(["/trap"]));
  }

}
