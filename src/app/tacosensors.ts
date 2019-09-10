export interface Sensor {
      lat: number;
      lng: number;
      id: string;
}

export interface SensorList extends Array<Sensor> {}

export interface MapCenter {
  lat: number;
  lng: number;
}

// To be replaced with real data from api once complete
export interface devPlotData {
  validTime: string;
  value: number;
}
