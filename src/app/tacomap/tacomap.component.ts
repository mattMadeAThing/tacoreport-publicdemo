import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SensorList, MapCenter, Sensor } from '../tacosensors';
import { NgIf } from '@angular/common';
import { MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';


@Component({
  selector: 'app-tacomap',
  templateUrl: './tacomap.component.html',
  styleUrls: ['./tacomap.component.css']
})
export class TacomapComponent implements OnInit {
  @Input() tacoPlots: SensorList;
  @Input() mapCenter: MapCenter;
  @Input() activeMarkerId: Sensor;
  // This value fires an event to indicate the user has picked a marker
  @Output() markerSelect = new EventEmitter<Sensor>();
  @Output() markerClick  = new EventEmitter<Sensor>()

  constructor() {}

  ngOnInit() {
  }
  onClickMarker(marker: Sensor){
    this.markerClick.emit(marker);
    console.log("clickme from map");
  }

  onUpdateMarker(marker: Sensor) {
    console.log(marker.id);
    this.markerSelect.emit(marker);
  }

  // This method is called in the template to make the active markers opacity = 1
  // and the inactive markers opacity = .5. It's purpose is to highlight the active sensor
  setOpacity(marker: Sensor) {
    if (marker === this.activeMarkerId) {
      return 1;
    } else {
      return .5;
    }
  }
}
