import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssComeFromFontComponent } from './css-come-from-font.component';

describe('CssComeFromFontComponent', () => {
  let component: CssComeFromFontComponent;
  let fixture: ComponentFixture<CssComeFromFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssComeFromFontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssComeFromFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
