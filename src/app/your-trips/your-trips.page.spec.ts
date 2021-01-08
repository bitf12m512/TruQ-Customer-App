import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourTripsPage } from './your-trips.page';

describe('YourTripsPage', () => {
  let component: YourTripsPage;
  let fixture: ComponentFixture<YourTripsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourTripsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourTripsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
