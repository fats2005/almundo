import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  hotels: Hotel[];
  filterNameKeyword: string;

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    //this.getHotels();
    this.hotelService.currentFilterNameKeyword.subscribe(filterNameKeyword => this.getHotels(filterNameKeyword))
  }

  getHotels(filterNameKeyword: string): void {
    console.log('getHotels hotel-list')
    this.hotelService.getHotels(filterNameKeyword)
      .subscribe(hotels => this.hotels = hotels);
  }


}
