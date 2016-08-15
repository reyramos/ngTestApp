import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';

import { AppComponent }             from './app.component';
import { routing }                  from './app.routing'; //, appRoutingProviders
import { PatientsComponent }        from './patients.component';
import { PatientDetailComponent }   from './PatientDetail/patient-detail.component';
import { PatientService }          from './patient.service';
//import { LoginComponent }               from './login.component';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        PatientsComponent,
        PatientDetailComponent
    ],
    providers: [
        PatientService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
