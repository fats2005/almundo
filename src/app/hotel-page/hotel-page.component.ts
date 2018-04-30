import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HotelService } from '../services/hotel.service';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-hotel-page',
  templateUrl: './hotel-page.component.html',
  styleUrls: ['./hotel-page.component.scss']
})
export class HotelPageComponent implements OnInit {

  hotel: Hotel;


  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHotel();
  }

  getHotel(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.hotelService.getHotel(id)
      .subscribe(hotel => this.hotel = hotel);
  }

  goBack(): void {
    this.location.back();
  }

}
