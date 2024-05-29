import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Services3Component } from './services3.component';

describe('Services3Component', () => {
  let component: Services3Component;
  let fixture: ComponentFixture<Services3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Services3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Services3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
