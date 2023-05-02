import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePdfComponentComponent } from './generate-pdf-component.component';

describe('GeneratePdfComponentComponent', () => {
  let component: GeneratePdfComponentComponent;
  let fixture: ComponentFixture<GeneratePdfComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratePdfComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratePdfComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
