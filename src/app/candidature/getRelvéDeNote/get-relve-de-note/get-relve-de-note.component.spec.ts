import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRelveDeNoteComponent } from './get-relve-de-note.component';

describe('GetRelveDeNoteComponent', () => {
  let component: GetRelveDeNoteComponent;
  let fixture: ComponentFixture<GetRelveDeNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRelveDeNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRelveDeNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
