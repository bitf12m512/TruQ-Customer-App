import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnGoingTripPage } from './on-going-trip.page';

describe('OnGoingTripPage', () => {
  let component: OnGoingTripPage;
  let fixture: ComponentFixture<OnGoingTripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnGoingTripPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnGoingTripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
