import { Component, OnInit } from '@angular/core';
import { Schedule } from '../models/schedule';
import { SCHEDULE_LIST } from '../database/scheduleList';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
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
