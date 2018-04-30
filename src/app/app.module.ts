import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { HeaderComponent } from './header/header.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelComponent } from './hotel/hotel.component';
import { FilterListComponent } from './filter-list/filter-list.component';
import { FilterNameComponent } from './filter-name/filter-name.component';
import { FilterStarsComponent } from './filter-stars/filter-stars.component';

// Services
import { HotelService } from './services/hotel.service';
import { AppRoutingModule } from './/app-routing.module';
import { HotelPageComponent } from './hotel-page/hotel-page.component'

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

library.add(fas, far);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HotelListComponent,
    HotelComponent,
    FilterListComponent,
    FilterNameComponent,
    FilterStarsComponent,
    HotelPageComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    // Remove it when a real server is ready to receive requests.
    //HttpClientInMemoryWebApiModule.forRoot(
    //InMemoryDataService, { dataEncapsulation: false }
    //)
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule {}
