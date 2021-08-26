import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/playlist/shared/playlist.model';
import { PlaylistService } from 'src/app/playlist/shared/playlist.service';

@Component({
  selector: 'app-dashboard-playlists',
  templateUrl: './dashboard-playlists.component.html',
  styleUrls: ['./dashboard-playlists.component.scss']
})
export class DashboardPlaylistsComponent implements OnInit {
  playlists : Playlist[] = [];
  total : number = 0;
  pageNum : number = 0

  constructor(private playlistService : PlaylistService) { }

  ngOnInit(): void {
    this.playlistService.getUserPlaylists(this.pageNum).subscribe(playlists => {
      this.playlists = playlists?.items ?? [];
      this.total = playlists?.total ?? 0;
    });
  }

}
