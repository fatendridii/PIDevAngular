import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailFormComponentComponent } from './mail-form-component.component';

describe('MailFormComponentComponent', () => {
  let component: MailFormComponentComponent;
  let fixture: ComponentFixture<MailFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
