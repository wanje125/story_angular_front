import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { CartBookmarkService } from '../../services/cart-bookmark.service'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  // @ts-ignore
  @Input() product: Product;
  selectedNum: number = 1;
  nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



  constructor(private cartService: CartBookmarkService) {

  }
  ngOnInit(): void {

  }

  addCart(p: Product): void {
    this.cartService.addCart(this.selectedNum, p);
    
  }
}
