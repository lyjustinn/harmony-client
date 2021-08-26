import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistDialogComponent } from './playlist-dialog/playlist-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import  {MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    PlaylistDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatTableModule
  ]
})
export class PlaylistModule { }
