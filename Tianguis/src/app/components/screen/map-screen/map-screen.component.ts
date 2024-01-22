import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/Service';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.css']
})
export class MapScreenComponent {

  constructor(private PlacesService:PlacesService) { }

 get isUserLocationReady(){
  return this.PlacesService.isUserLocationReady
  
 }

}
