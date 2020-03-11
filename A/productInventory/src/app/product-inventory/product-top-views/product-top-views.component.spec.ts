import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTopViewsComponent } from './product-top-views.component';

describe('ProductTopViewsComponent', () => {
  let component: ProductTopViewsComponent;
  let fixture: ComponentFixture<ProductTopViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTopViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTopViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
