import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapaneseSyllabaryComponent } from './japanese-syllabary.component';

describe('JapaneseSyllabaryComponent', () => {
  let component: JapaneseSyllabaryComponent;
  let fixture: ComponentFixture<JapaneseSyllabaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JapaneseSyllabaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JapaneseSyllabaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
