import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {
  show_filter_name: Boolean = true;
  show_filter_stars: Boolean = true;
  show_filters: Boolean = true;
  constructor() {
    //close filters by default in small devices
    if (window.innerWidth < 992) {
      this.show_filters = false;
    }

  }

  ngOnInit() {}

}
