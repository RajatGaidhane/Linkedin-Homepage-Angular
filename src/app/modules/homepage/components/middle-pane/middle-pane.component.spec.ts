import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlePaneComponent } from './middle-pane.component';

describe('MiddlePaneComponent', () => {
  let component: MiddlePaneComponent;
  let fixture: ComponentFixture<MiddlePaneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiddlePaneComponent]
    });
    fixture = TestBed.createComponent(MiddlePaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
