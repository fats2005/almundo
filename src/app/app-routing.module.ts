import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelPageComponent } from './hotel-page/hotel-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/hotels', pathMatch: 'full' },
  { path: 'hotels', component: HotelListComponent },
  { path: 'hotels/:id', component: HotelPageComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],

})
export class AppRoutingModule {}
