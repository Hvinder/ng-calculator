import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcBodyComponent } from './calc-body/calc-body.component';
import { InputPadComponent } from './calc-body/input-pad/input-pad.component';
import { ResultComponent } from './calc-body/result/result.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AddHistoryNoteComponent } from './calc-body/result/add-history-note/add-history-note.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CalcBodyComponent,
    InputPadComponent,
    ResultComponent,
    AddHistoryNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  entryComponents: [AddHistoryNoteComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
