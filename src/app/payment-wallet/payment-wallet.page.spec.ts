import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentWalletPage } from './payment-wallet.page';

describe('PaymentWalletPage', () => {
  let component: PaymentWalletPage;
  let fixture: ComponentFixture<PaymentWalletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentWalletPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentWalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
