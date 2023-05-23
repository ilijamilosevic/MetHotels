import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Room } from '../room/room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';

  rooms: Room[];

  searchText!: string;


  constructor() {
    this.rooms = [
      new Room("Babin zub", "With 4 pools, an on-site restaurant.", 299, "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 8.9),
      new Room("Hilton Beograd", "Located in city center.", 399, "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 9.0),
      new Room("Kalithea Suites", "Great hotel with sea view.", 199, "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", 8.6),
      new Room("Hotel Grand", "This luxury hotel on Kopaonik will give you best place for recreation.", 549, "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80", 8.6)
    ]
  }

  ngOnInit(): void {
  }



}
