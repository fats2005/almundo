import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel'

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  @Input() hotel: any;
  @Input() type: any;

  stars: Array < any > = [];

  constructor() {}

  ngOnInit() {
    this.updateStars();
  }

  updateStars() {
    this.stars = Array(this.hotel['stars']).fill("");
  }

}
