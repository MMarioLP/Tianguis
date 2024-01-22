import { Component } from '@angular/core';
import { PlacesService } from '../../Service/places.service';
import { Feature } from '../search-bar/Interfaces/places';
import { MapService } from '../../Service/map.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent  {

  public selectedId: string='';
  constructor(private PlacesService: PlacesService, private MapService:MapService ) { }

  get isLoadingPlaces():boolean{
    return this.PlacesService.isLoadingPlaces;
  }

  get places(): Feature[]{
    return this.PlacesService.places;
  }
  flyTo(place:Feature){
    this.selectedId=place.id;
    
    const[lng , lat]=place.center
    this.MapService.flyTo([lng, lat])
  }

  getDirections(place: Feature){

    if(!this.PlacesService.useLocation) throw Error('No hay userLocation')
    this.PlacesService.deletePlaces();

    const star=this.PlacesService.useLocation;
    const end=place.center as [number,number];

    this.MapService.getRouteBetweenPoints(star, end)
  }
}
