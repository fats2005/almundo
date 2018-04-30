import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-filter-stars',
  templateUrl: './filter-stars.component.html',
  styleUrls: ['./filter-stars.component.scss']
})
export class FilterStarsComponent implements OnInit {
  public all_stars: Boolean = true;

  counter = Array;

  public stars: any = [{
      stars: '1',
      selected: false
    },
    {
      stars: '2',
      selected: false
    },
    {
      stars: '3',
      selected: false
    },
    {
      stars: '4',
      selected: false
    },
    {
      stars: '5',
      selected: false
    }
  ];

  constructor(private hotelService: HotelService) {}

  ngOnInit() {}

  onChangeAll() {

    for (var _i = 0; _i < this.stars.length; _i++) {
      if (this.all_stars) {
        this.stars[_i]["selected"] = false;
      }
    }
    this.FilterByStars();

  }

  onChangeStars(index) {

    if (this.stars[index].selected) {
      this.all_stars = false;
      this.FilterByStars();

    }
  }

  FilterByStars(): void {
    //TODO: Implement Stars Filters
  }

}
