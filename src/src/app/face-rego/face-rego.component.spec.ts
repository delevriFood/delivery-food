import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceRegoComponent } from './face-rego.component';

describe('FaceRegoComponent', () => {
  let component: FaceRegoComponent;
  let fixture: ComponentFixture<FaceRegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceRegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceRegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
