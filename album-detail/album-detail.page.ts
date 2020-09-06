import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyServiceService } from '../spotify-service.service';
import {Howl} from "howler"
import { start } from 'repl';
import { IonRange } from '@ionic/angular';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.page.html',
  styleUrls: ['./album-detail.page.scss'],
})
export class AlbumDetailPage implements OnInit {



private id:string;
private album:any;
private image:string;
private traks:any[];
private preview_url:string;
  player: any;
private  ispalaying=false;
private name:string;
private playList:any[];
private track:any;
private progress=0;

//recuperer la valeur de la progress bare grace #range dans le html
@ViewChild("range",{static:false})range:IonRange

 
  constructor(private router:Router,private route:ActivatedRoute,private spotifyService:SpotifyServiceService) { 
   
    this.route.queryParams.subscribe(params=>{
     this.id=params.id
    // console.log(this.id);
     this.getAlbum();
     
    });
  }

  //
  ngOnInit() {
  }

//recuperer un album de l"api
  getAlbum(){
        this.spotifyService.searchAlbum(this.id).subscribe(data=>{
        this.album=data;
      //  console.log(this.album);
        this.image=this.album.images[0];
      //  console.log(this.image.url)
        this.traks=this.album.tracks.items;
    })
  }

  //function globale lecture des morceaux
  play(track:any){
    if(this.player){
      this.player.stop()
    }
    this.track=track;
    //creation dun player 
    this.player=new Howl({
      //passer la valeur de url mp3 obtenue par le front grasse a track
      src:[this.track.preview_url],
      html5:true,
      //function musique en court
      onplay:()=>{
        console.log("onplay")
        this.ispalaying=true
        this.track.preview_url=track.preview_url
        this.track=track;
        this.modifProgress();
      },
      //function musique fini timeout
      onend:()=>{
        console.log("onend")
      }
    })
    this.player.play()
  }

  //function back track
  prev(){
    let index= this.traks.indexOf(this.track);
    //console.log(index);
     if(index > 0){
      this.play(this.traks[index -1])
     }else{
       this.play(this.traks[this.traks.length -1])
    }
  }

//2 function play stop
  stopPlay(pause){//true
   this.ispalaying= !pause;
   if(pause){
     this.player.pause();
   }else{
     this.player.play();
   }
  }

  //function passer a lautre chanson++
  next(){
    let index= this.traks.indexOf(this.track);
   // console.log(index);
     if(index != this.traks.length -1){
      this.play(this.traks[index +1])
     }else{
      this.play(this.traks[0])
    }
  }

//
seek(){
let newValue= +this.range.value;
let duration=this.player.duration();
this.player.seek(duration * (newValue/100));
}


//modifier la bare de progress function
modifProgress(){
let seek=this.player.seek();
this.progress=(seek/this.player.duration())*100||0;
setTimeout(()=>{
  this.modifProgress();
},1000)
}

}

//


