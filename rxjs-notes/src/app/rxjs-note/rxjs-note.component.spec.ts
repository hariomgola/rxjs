import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsNoteComponent } from './rxjs-note.component';

describe('RxjsNoteComponent', () => {
  let component: RxjsNoteComponent;
  let fixture: ComponentFixture<RxjsNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsNoteComponent]
    });
    fixture = TestBed.createComponent(RxjsNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
