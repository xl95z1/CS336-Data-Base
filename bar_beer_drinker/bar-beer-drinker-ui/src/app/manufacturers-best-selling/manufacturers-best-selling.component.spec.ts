import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturersBestSellingComponent } from './manufacturers-best-selling.component';

describe('ManufacturersBestSellingComponent', () => {
  let component: ManufacturersBestSellingComponent;
  let fixture: ComponentFixture<ManufacturersBestSellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturersBestSellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturersBestSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
