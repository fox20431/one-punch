import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizeUnitComponent } from './font-size-unit.component';

describe('FontSizeUnitComponent', () => {
  let component: FontSizeUnitComponent;
  let fixture: ComponentFixture<FontSizeUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontSizeUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontSizeUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
