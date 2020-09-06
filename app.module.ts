import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SpotifyServiceService } from './spotify-service.service';
import {HttpClientModule} from '@angular/common/http'
import {ArtistAlbumsPage} from './artist-albums/artist-albums.page'
import {AlbumDetailPage} from "./album-detail/album-detail.page"
//installer avec la commande npm install module javascript
import {Howl} from  "howler"


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,],
  providers: [
    StatusBar,
   SpotifyServiceService,
   ArtistAlbumsPage,
   AlbumDetailPage,
 
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
