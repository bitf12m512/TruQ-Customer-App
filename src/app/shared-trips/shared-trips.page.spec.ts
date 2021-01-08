import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SharedTripsPage } from './shared-trips.page';

describe('SharedTripsPage', () => {
  let component: SharedTripsPage;
  let fixture: ComponentFixture<SharedTripsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedTripsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SharedTripsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
