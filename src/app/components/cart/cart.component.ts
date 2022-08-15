import { Component, OnInit } from '@angular/core';
import { CartBookmarkService } from '../../services/cart-bookmark.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: Product[] = []
  totalPrice: number = 0
  nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor(private cartService: CartBookmarkService) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getCart()
    this.totalPrice = this.cartService.getTotalPrice()
  }
  upVote(id:number): void {
    let cart = this.cartList.filter(cart => cart.id == id)[0];
    let pnum:number = (cart.quantity as unknown) as number
    pnum = pnum + 1 as number;
    cart.quantity = pnum;
    this.totalPrice = this.cartService.getTotalPrice()
  }

  downVote(id: number): void {
    let cart = this.cartList.filter(cart => cart.id == id)[0];
    
    if (cart.quantity as number > 0) {
      cart.quantity = cart.quantity as number - 1 as number;

    }
    this.totalPrice = this.cartService.getTotalPrice()
    
  }

  deleteProduct(id: number): void {
    console.log(id)
    this.cartService.deleteCart(id)
    this.cartList = this.cartService.getCart()
    this.totalPrice = this.cartService.getTotalPrice()
  }
}
