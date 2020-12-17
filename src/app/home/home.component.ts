import { Component, OnInit } from '@angular/core';
import { Schedule } from '../models/schedule';
import { DomSanitizer } from '@angular/platform-browser';
import { SCHEDULE_LIST } from '../schedule/scheduleList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  schedule: Schedule;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.schedule = SCHEDULE_LIST.reverse()[0];
    this.schedule.songs.forEach(song => {
      song.spotifyUrl = this.sanitizer.bypassSecurityTrustHtml(song.spotifyUrl.toString());
    })
  }

}
