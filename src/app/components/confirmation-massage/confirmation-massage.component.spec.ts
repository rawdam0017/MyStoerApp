import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationMassageComponent } from './confirmation-massage.component';

describe('ConfirmationMassageComponent', () => {
  let component: ConfirmationMassageComponent;
  let fixture: ComponentFixture<ConfirmationMassageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationMassageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationMassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
