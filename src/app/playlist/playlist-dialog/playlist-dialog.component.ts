import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SongItem } from 'src/app/shared/song.model';
import { Artist } from 'src/app/user/shared/user.model';
import { Playlist } from '../shared/playlist.model';
import { PlaylistService } from '../shared/playlist.service';

@Component({
  selector: 'app-playlist-dialog',
  templateUrl: './playlist-dialog.component.html',
  styleUrls: ['./playlist-dialog.component.scss']
})
export class PlaylistDialogComponent implements OnInit {
  songs : SongItem[] = []
  displayedColumns: string[] = ['name', 'artists', 'album', 'duration'];

  constructor(private playlistService : PlaylistService, public dialogRef : MatDialogRef<PlaylistDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public playlist : Playlist) { }

  ngOnInit(): void {
    this.playlistService.getPlaylist(this.playlist.id).subscribe(playlist => {
      this.songs = playlist?.tracks.items ?? [];
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getArtists( artists : Artist[]) : string {
    return artists.map( x => x.name).join(", ");
  }

  formatMs(ms : string): string {
    var msNum : number = isNaN(+ms) ? 0 : +ms;

    var minutes = Math.floor(msNum / 60000);
    var seconds = +((msNum % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
}
