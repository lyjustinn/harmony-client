import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardPlaylistsComponent } from './dashboard-playlists/dashboard-playlists.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
    MatExpansionModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
