import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { ShowLocationComponent } from './show-location/show-location.component';

import { RouterModule } from '@angular/router';


@NgModule({

  declarations: [

    AppComponent,

    ShowLocationComponent

  ],

  imports: [

    BrowserModule,

    RouterModule.forRoot([]) // Required for Router service

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }