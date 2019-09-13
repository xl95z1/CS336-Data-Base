import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TopDrinkersComponent } from './top-drinkers.component';


describe('TopDrinkersComponent', () => {
  let component: TopDrinkersComponent;
  let fixture: ComponentFixture<TopDrinkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopDrinkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDrinkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
