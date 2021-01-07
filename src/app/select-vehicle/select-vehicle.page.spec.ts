import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectVehiclePage } from './select-vehicle.page';

describe('SelectVehiclePage', () => {
  let component: SelectVehiclePage;
  let fixture: ComponentFixture<SelectVehiclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectVehiclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectVehiclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
