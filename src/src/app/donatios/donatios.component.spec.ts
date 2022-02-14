import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatiosComponent } from './donatios.component';

describe('DonatiosComponent', () => {
  let component: DonatiosComponent;
  let fixture: ComponentFixture<DonatiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
