import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardPlaylistsComponent } from './dashboard-playlists/dashboard-playlists.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardPlaylistsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatPaginatorModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
