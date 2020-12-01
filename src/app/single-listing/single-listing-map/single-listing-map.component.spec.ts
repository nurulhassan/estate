import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleListingMapComponent } from './single-listing-map.component';

describe('SingleListingMapComponent', () => {
  let component: SingleListingMapComponent;
  let fixture: ComponentFixture<SingleListingMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleListingMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleListingMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
