import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgbValueConversionComponent } from './rgb-value-conversion.component';

describe('RgbValueConversionComponent', () => {
  let component: RgbValueConversionComponent;
  let fixture: ComponentFixture<RgbValueConversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RgbValueConversionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RgbValueConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
