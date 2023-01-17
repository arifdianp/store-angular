import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
//import { loadStripe } from '@stripe/stripe-js';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})

export class CartComponent implements OnInit, OnDestroy
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

  cartSubscription: Subscription | undefined;



  //constructor inside cart component
  constructor(private cartService: CartService, private http: HttpClient) {}

  ngOnInit(): void
  {
    this.cartSubscription = this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = _cart.items;
    });
  }
  ngOnDestroy():
  {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
  }

  //get total amount before checkout
  getTotal(items: CartItem[]): number {
    return items.map((item) => item.price * item.quantity).reduce((prev,current) => prev+current, 0);
  }

  //clearing cart function
  onClearCart(): void
  {
    this.cartService.clearCart();
  }

  onAddQuantity(item: CartItem): void
  {
    this.cartService.addToCart(item);
  }

  onRemoveFromCart(item: CartItem): void
  {
    this.cartService.removeFromCart(item);
  }

  onRemoveQuantity(item: CartItem): void
  {
    this.cartService.removeQuantity(item);
  }

  onClearCart(): void
  {
    this.cartService.clearCart();
  }

  onCheckout(): void
  {
    this.http
      .post('http://localhost:4242/checkout', {
        items: this.cart.items,
      })
      .subscribe(async (res: any) => {
        let stripe = await loadStripe('your token');
        stripe?.redirectToCheckout({
          sessionId: res.id,
        });
      });
  }


}
