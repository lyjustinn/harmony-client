import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardPlaylistsComponent } from './dashboard-playlists/dashboard-playlists.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardPlaylistsComponent,
    DashboardItemComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatPaginatorModule,
    MatExpansionModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
