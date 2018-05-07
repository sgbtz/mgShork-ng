import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { HomeComponent } from './home/home.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { SystemComponent } from './system/system.component';
import { AlarmComponent } from './alarm/alarm.component';

import { RoutingModule } from "./routing/routing.module";
import { MaterialModule } from "./material/material.module"; 


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BottomBarComponent,
    HomeComponent,
    InterfacesComponent,
    SystemComponent,
    AlarmComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
