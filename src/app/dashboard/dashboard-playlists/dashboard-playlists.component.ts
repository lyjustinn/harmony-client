import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/playlist/shared/playlist.model';
import { PlaylistService } from 'src/app/playlist/shared/playlist.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard-playlists',
  templateUrl: './dashboard-playlists.component.html',
  styleUrls: ['./dashboard-playlists.component.scss']
})
export class DashboardPlaylistsComponent implements OnInit {
  playlists : Playlist[] = [];
  total : number = 0;
  pageNum : number = 0;
  pageEvent : PageEvent;
  pageSize = 10;
  pageSizeOptions = [10];

  constructor(private playlistService : PlaylistService) { }

  ngOnInit(): void {
    this.playlistService.getUserPlaylists(this.pageNum).subscribe(playlists => {
      this.playlists = playlists?.items ?? [];
      this.total = playlists?.total ?? 0;
    });
  }

  nextPage(t : PageEvent) {
    console.log(t.pageIndex)
    console.log("emitted")

    this.pageNum = t.pageIndex;
    this.playlistService.getUserPlaylists(this.pageNum).subscribe(playlists => {
      this.playlists = playlists?.items ?? [];
      this.total = playlists?.total ?? 0;
    });
  }

}
