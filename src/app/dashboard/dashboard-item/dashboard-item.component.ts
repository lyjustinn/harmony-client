import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlaylistDialogComponent } from 'src/app/playlist/playlist-dialog/playlist-dialog.component';
import { Playlist } from 'src/app/playlist/shared/playlist.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss']
})
export class DashboardItemComponent implements OnInit {
  @Input() playlist : Playlist;
  @Input() uid : string
  apiUrl : string = environment.apiUrl+"/api/playlists/convert/youtube"; 
  disabled : boolean = false;

  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
    this.disabled = this.playlist.owner.id !== this.uid;
  }

  decodeHtml(html : string) {
    var doc = new DOMParser().parseFromString(html, "text/html");
    return doc.documentElement.textContent;
  }

  openDialog() : void {
    const dialogRef = this.dialog.open(PlaylistDialogComponent, {
      data: this.playlist
    });
  }

}
