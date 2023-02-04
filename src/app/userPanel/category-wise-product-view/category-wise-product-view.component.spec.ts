import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWiseProductViewComponent } from './category-wise-product-view.component';

describe('CategoryWiseProductViewComponent', () => {
  let component: CategoryWiseProductViewComponent;
  let fixture: ComponentFixture<CategoryWiseProductViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryWiseProductViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryWiseProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
