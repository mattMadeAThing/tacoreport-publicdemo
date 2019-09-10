import { Component, OnInit, AfterViewInit, Input, ViewChild, ViewChildren } from '@angular/core';
import { SensorList, MapCenter, Sensor } from 'src/app/tacosensors';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { LinechartComponent } from '../linechart/linechart.component';
@Component({
  selector: 'app-smartcontainer',
  templateUrl: './smartcontainer.component.html',
  styleUrls: ['./smartcontainer.component.css']
})


export class SmartcontainerComponent implements OnInit {
  // TacoData is the list of all co-ordinates for everything
  tacoData: SensorList;
  mapCenter: MapCenter;
  activeMarkerOrRow: Sensor;
  constructor(private dataService: DataService, public dialog: MatDialog) {
  }

  ngOnInit() {
    // Expect to add subscription here when API is deployed
    this.tacoData = this.dataService.getTacoPlots();
    this.mapCenter = this.dataService.getMapCenter();
  }

  onClickRowMarker($event) {
    console.log($event);
    this.openDialog($event)
  }

  // Sets the parameter(activeMarkerOrRow) which children receive in the template
  recieveRowMarkerUpdate($event) {
    if ($event != null) {
    this.activeMarkerOrRow = $event;
    }
  }

  // Opens the modal Dialog to display data on chart. Keep param, will be used to query service when api is finished.
  openDialog(selectedSensor?: Sensor): void {
    this.dialog.open(LinechartComponent, {
      width: '70%',
      height: '70%',
      hasBackdrop: true,
    });
  }

}
