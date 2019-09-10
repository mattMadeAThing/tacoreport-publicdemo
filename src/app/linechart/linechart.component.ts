/*  This component will display the graph for the sensor selected via sidebar or
AGM marker(google map pin).  Good holy hotmess I can't wait to use our api instead of random placeholder stuff
*/
import { DataService } from '../data.service';

import { Component, OnInit, ViewChild, Input, Inject } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Color, Label } from 'ng2-charts';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { Sensor } from '../tacosensors';


@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {
  @Input() sensorSpecific: Sensor;
  // Begin chart parameters. Data loaded in ngOnInit
  // DEVNOTES find a way to make these declarations look less disgusting and abstract away as much setup as possible
  public lineChartData: ChartDataSets[] = [{ data: [], label: '\"tacos\"' }];
  public lineChartLabels: Label[] =
  ['2:00am', '4:00am', '6:00am', '8:00am', '10:00am', 'Noon', '2:00pm', '4:00pm', '6:00pm', '8:00pm', '10:00pm', 'Midnight'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {responsive: true, annotation: true };
  public lineChartColors: Color[] = [{  borderColor: 'black', backgroundColor: 'rgba(153,204,255,0.3)' } ];
  public lineChartPlugins = [];
  // End chart parameters

  constructor(private dataSvc: DataService,
              public dialog: MatDialogRef<LinechartComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  ngOnInit() {
   this.dataSvc.devOnlyGetMockLineData().subscribe(data => {
    this.lineChartData[0].data = data;
    });
  }

  onClose() {
    this.dialog.close();
  }
}



