import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YourTripSummaryPage } from './your-trip-summary.page';

describe('YourTripSummaryPage', () => {
  let component: YourTripSummaryPage;
  let fixture: ComponentFixture<YourTripSummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourTripSummaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YourTripSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
