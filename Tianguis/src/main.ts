import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as mapboxgl from 'mapbox-gl';





(mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1IjoibWFyaW8xOTkiLCJhIjoiY2w4eWM5dnBwMGRxdzQwazRzdmZteXFwbSJ9.chTGvDvLCmLaRd17qe0Qjw';


if(!navigator.geolocation){
  alert('No jalo');
  throw new Error('No jalo'); 
}


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
