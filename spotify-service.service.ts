
import {HttpClient,HttpHeaders} from   '@angular/common/http';
import { Injectable } from '@angular/core';





  
@Injectable({
  providedIn: 'root'
})
export class SpotifyServiceService {
private token_auth:string = "Bearer BQD0NVt071rytCdNWplXuO26a89TyM3AyI0QQLZKsljCUa5Eao0EefFYPxQOXZZgGUzQZ4IJjxJjosulTijaL8_PR5Uys_D35Z7Q4HfZaDMQyslFq4oNYUmoR-Tw8_HRiPSRPCWGVjBhwtSwC-r7xprrJBn3DYLu3J7E"

private baseUrl:string="https://api.spotify.com/v1";
private urlCherch:string=this.baseUrl+"/search?q=";
private urlAlbums:string=this.baseUrl+"/artists/";
private urlAlbum:string=this.baseUrl+"/albums/";
private requestHeders=new HttpHeaders().set("Content-Type","application/json")
.append("Authorization",this.token_auth)
constructor(public http:HttpClient) { }



searchArtist(name:string){
return this.http.get(this.urlCherch+name+'&type=artist',{headers:this.requestHeders});
}

searchAlbums(id:string){
  return this.http.get(this.urlAlbums+id+"/albums",{headers:this.requestHeders});
}

searchAlbum(id:string){
  return this.http.get(this.urlAlbum+id,{headers:this.requestHeders});
}


}


