import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoyenneFilterCandidatureComponent } from './moyenne-filter-candidature.component';

describe('MoyenneFilterCandidatureComponent', () => {
  let component: MoyenneFilterCandidatureComponent;
  let fixture: ComponentFixture<MoyenneFilterCandidatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoyenneFilterCandidatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoyenneFilterCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
