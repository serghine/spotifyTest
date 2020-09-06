import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistAlbumsPageRoutingModule } from './artist-albums-routing.module';

import { ArtistAlbumsPage } from './artist-albums.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistAlbumsPageRoutingModule
  ],
  declarations: [ArtistAlbumsPage]
})
export class ArtistAlbumsPageModule {}
