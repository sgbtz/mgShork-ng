import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { HomeComponent } from './home/home.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { SystemComponent } from './system/system.component';
import { AlarmComponent } from './alarm/alarm.component';
import { TrapComponent } from './trap/trap.component';
import { IpComponent } from './ip/ip.component';


import { RoutingModule } from "./routing/routing.module";
import { MaterialModule } from "./material/material.module"; 

import { SystemService } from "./system/services/system.service";
import { InterfacesService } from "./interfaces/services/interfaces.service";
import { TrapService } from "./trap/services/trap.service";
import { IpService } from "./ip/services/ip.service";



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BottomBarComponent,
    HomeComponent,
    InterfacesComponent,
    SystemComponent,
    AlarmComponent,
    TrapComponent,
    IpComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SystemService,
    MatSnackBar,
    InterfacesService,
    TrapService,
    IpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
