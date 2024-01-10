import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionOutletComponent } from './function-outlet.component';

describe('FunctionOutletComponent', () => {
  let component: FunctionOutletComponent;
  let fixture: ComponentFixture<FunctionOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FunctionOutletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunctionOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
