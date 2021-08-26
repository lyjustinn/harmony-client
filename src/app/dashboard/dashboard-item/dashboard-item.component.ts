import { Component, Input, OnInit } from '@angular/core';
import { Playlist } from 'src/app/playlist/shared/playlist.model';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss']
})
export class DashboardItemComponent implements OnInit {
  @Input() playlist : Playlist;

  constructor() { }

  ngOnInit(): void {
    
  }

  decodeHtml(html : string) {
    var doc = new DOMParser().parseFromString(html, "text/html");
    return doc.documentElement.textContent;
  }

}
