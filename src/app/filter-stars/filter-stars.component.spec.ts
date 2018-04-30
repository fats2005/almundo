import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStarsComponent } from './filter-stars.component';

describe('FilterStarsComponent', () => {
  let component: FilterStarsComponent;
  let fixture: ComponentFixture<FilterStarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterStarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
