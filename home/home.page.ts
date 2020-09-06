import { Component } from '@angular/core';
import { SpotifyServiceService } from '../spotify-service.service';
//push parch pas
//import { NavController } from '@ionic/angular';
//import {ArtistAlbumsPage} from "../artist-albums/artist-albums.page"
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 private items:any[];
  constructor(private router:Router,private _spotifyService:SpotifyServiceService) {}
  

//chercher artiste api
  chercherArtist(event:any){
    let value=event.target.value;
    console.log(value);
this._spotifyService.searchArtist(value).subscribe(
  data=>{
    this.items=data.artists.items;
   // console.log(this.items);
  },
  error=>{
    console.log(error)
  })
  }

//passer la data 
  chercherAlbums(id:string, name:string){
    let navigationExtrat: NavigationExtras={
     queryParams:{
      id:id,
      name:name
     }
    }
    this.router.navigate(['artist-albums'],navigationExtrat);
  }
}
