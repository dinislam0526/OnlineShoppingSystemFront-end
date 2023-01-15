import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepurchaseComponent } from './createpurchase.component';

describe('CreatepurchaseComponent', () => {
  let component: CreatepurchaseComponent;
  let fixture: ComponentFixture<CreatepurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatepurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
