import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontPageComponent } from './font-page.component';

describe('FontPageComponent', () => {
  let component: FontPageComponent;
  let fixture: ComponentFixture<FontPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
