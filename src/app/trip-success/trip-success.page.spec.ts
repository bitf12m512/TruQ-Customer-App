import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TripSuccessPage } from './trip-success.page';

describe('TripSuccessPage', () => {
  let component: TripSuccessPage;
  let fixture: ComponentFixture<TripSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TripSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
