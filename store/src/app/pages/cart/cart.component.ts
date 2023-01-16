import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})

export class CartComponent
{
  cart: Cart = { items: [{
    product: "https://via.placeholder.com/150",
    name: "sneakers",
    price: 100,
    quantity: 2,
    id: 1
  }]};

  dataSource: CartItem[] = [];
  displayedColumns: string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  ngOnDestroy(): void {}

  getTotal(items: CartItem[]): number
  {
    return items.map((item) => item.price * item.quantity).reduce((prev,current) => prev+current, 0);
  }

}
