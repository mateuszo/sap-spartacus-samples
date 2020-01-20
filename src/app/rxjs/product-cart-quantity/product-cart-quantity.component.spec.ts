import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartQuantityComponent } from './product-cart-quantity.component';
import { CartService } from '@spartacus/core';
import { of } from 'rxjs';
import { CurrentProductService } from '@spartacus/storefront';



describe('ProductCartQuantityComponent', () => {
  let component: ProductCartQuantityComponent;
  let fixture: ComponentFixture<ProductCartQuantityComponent>;
  const carServiceMock = jasmine.createSpyObj('CartService', ['getEntries']);
  carServiceMock.getEntries.and.returnValue(of([]));

  const productServiceMock = jasmine.createSpyObj('CurrentProductService', ['getProduct']);
  productServiceMock.getProduct.and.returnValue(of({code: '1234', name: 'camera'}));

  const createComponent = () => {
    fixture = TestBed.createComponent(ProductCartQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCartQuantityComponent],
      providers: [{ provide: CartService, useValue: carServiceMock }, {provide: CurrentProductService, useValue: productServiceMock}]
    })
      .compileComponents();
  }));

  beforeEach(() => {

  });

  it('should create', () => {
    createComponent();
    expect(component).toBeTruthy();
  });

  it('quantity should be zero when cart is empty', (done: DoneFn) => {
    carServiceMock.getEntries.and.returnValue(of([]));
    createComponent();
    component.inCartQuantity$.subscribe(value => {
      expect(value).toBe(0);
      done();
    });
  });


  it('quantity should be one when quantity of current product in cart is one', (done: DoneFn) => {
    carServiceMock.getEntries.and.returnValue(
      of([
        { product: { code: '999', name: 'something' }, quantity: 3},
        { product: { code: '1234', name: 'camera' }, quantity: 1}
      ]));
    createComponent();
    component.inCartQuantity$.subscribe(value => {
      expect(value).toBe(1);
      done();
    });
  });

  it('quantity should be three when cart has three items', (done: DoneFn) => {
    carServiceMock.getEntries.and.returnValue(
      of([
        { product: { code: '1234', name: 'camera' }, quantity: 3 }
      ]));
    createComponent();
    component.inCartQuantity$.subscribe(value => {
      expect(value).toBe(3);
      done();
    });
  } );

});
