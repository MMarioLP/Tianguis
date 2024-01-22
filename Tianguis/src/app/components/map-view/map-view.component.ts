import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Map, Popup, Marker} from 'mapbox-gl';
import { PlacesService } from '../../Service/places.service';
import { MapService } from '../../Service/map.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {


  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor(private PlacesService: PlacesService,
              private mapService:MapService,
              private router: Router, ) { }





  ngAfterViewInit(): void {

    if(!this.PlacesService.useLocation) throw Error('No funciona')
    
    
    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.PlacesService.useLocation,
      zoom: 14 // starting zoom
      
      });
     
      
    
const popup = new Popup()

  .setHTML(`
  <h6>Aquí estoy</h6>
  <span>Estoy en este lugar del mundo</span>
  `);
      new Marker({color: 'red'})
      .setLngLat(this.PlacesService.useLocation)
      .setPopup(popup)
      .addTo(map)

      this.mapService.setMap(map);
      
  }

}

