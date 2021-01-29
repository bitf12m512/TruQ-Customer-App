import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HouseFloorsPage } from './house-floors.page';

describe('HouseFloorsPage', () => {
  let component: HouseFloorsPage;
  let fixture: ComponentFixture<HouseFloorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseFloorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HouseFloorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
