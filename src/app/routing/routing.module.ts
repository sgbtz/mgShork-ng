import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "../home/home.component";
import { SystemComponent } from "../system/system.component";
import { InterfacesComponent } from "../interfaces/interfaces.component";
import { IpComponent } from "../ip/ip.component";
import { TrapComponent } from "../trap/trap.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "system", component: SystemComponent },
  { path: "interfaces", component: InterfacesComponent },
  { path: "ip", component: IpComponent },
  { path: "trap", component: TrapComponent },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
