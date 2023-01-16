import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: 'product-box.component.html',
  styles: [
  ]
})

export class ProductBoxComponent
{
  @Input() fullWidthMode = false;
  @Input() product: Product | undefined ={
    id: 1,
    title: 'sneakers',
    price: 100,
    category: 'shoes',
    description: 'description',
    image: "https://via.placeholder.com/150"
  };

  @Output() addToCart = new EventEmitter();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
