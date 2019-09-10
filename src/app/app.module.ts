import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { DataService } from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartcontainerComponent } from './smartcontainer/smartcontainer.component';
import { TacomapComponent } from './tacomap/tacomap.component';
import { SensorSidebarComponent } from './sensor-sidebar/sensor-sidebar.component';
import { LinechartComponent } from './linechart/linechart.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    SmartcontainerComponent,
    TacomapComponent,
    SensorSidebarComponent,
    LinechartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDBGz4S-qCw7fwToSkv2Va1QFGxUu9ZceI'
    }),
    MaterialModule,
  ],
  entryComponents:[LinechartComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
