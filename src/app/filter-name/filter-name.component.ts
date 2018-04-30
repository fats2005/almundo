import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-filter-name',
  templateUrl: './filter-name.component.html',
  styleUrls: ['./filter-name.component.scss']
})
export class FilterNameComponent implements OnInit {


  public filter: any = { keyword: '' };

  constructor(private hotelService: HotelService) {}

  ngOnInit() {}


  // TODO: Implement autocomplete filter
  FilterByName(): void {
    //Send the keyword to the service in order to update hotel-list data
    this.hotelService.changeFilterNameKeyword(this.filter.keyword)
    //this.filter.keyword = '';
    //TODO: Add the keyword as a tag with a delete buttom (x)
    //The delete buttom for clear the filter
  }

}
