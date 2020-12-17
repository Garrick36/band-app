import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member';
import { MEMBERS } from './membersList';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[];

  constructor() { }

  ngOnInit(): void {
    this.members = MEMBERS;
  }

}
