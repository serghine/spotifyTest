import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute ,NavigationExtras} from '@angular/router';
import { SpotifyServiceService } from '../spotify-service.service';
//navctrl push not found
//import {AlbumDetailPage} from "../album-detail/album-detail.page"


@Component({
  selector: 'app-artist-albums',
  templateUrl: './artist-albums.page.html',
  styleUrls: ['./artist-albums.page.scss'],
})
export class ArtistAlbumsPage implements OnInit {
  //
  private id:string;
  private  name:string;
  private  albums:any[];
  //
  //
  constructor(private router:Router,private route:ActivatedRoute,private SpotifyServiceService:SpotifyServiceService) { 
    this.route.queryParams.subscribe(params=>{
      this.id=params.id;
      this.name=params.name;
     this.getAlbums();
    })
  };

  //
  ngOnInit() {
  }


  //recuperer tout les albums dun artist de api
getAlbums(){
this.SpotifyServiceService.searchAlbums(this.id).subscribe(data=>{
  this.albums = data.items;
  console.log(this.albums);
},err=>{
  console.log(err)
})
}

//navControle ==le push ne marche pas 
//passer la data de la page albums---to--detail album 
detailAlbum(id:string){
  const navigateExtras:NavigationExtras={
    queryParams:{
      id:id
    }
  }
this.router.navigate(["album-detail"],navigateExtras); 
}

}
