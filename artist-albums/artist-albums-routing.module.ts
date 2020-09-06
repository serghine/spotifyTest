import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistAlbumsPage } from './artist-albums.page';

const routes: Routes = [
  {
    path: '',
    component: ArtistAlbumsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistAlbumsPageRoutingModule {}
