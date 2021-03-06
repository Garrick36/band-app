import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { AlbumsComponent } from './albums/albums.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'playlists',
    component: PlaylistsComponent
  },
  {
    path: 'members',
    component: MembersComponent
  },
  {
    path: 'albums',
    component: AlbumsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
