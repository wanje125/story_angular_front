import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class CartBookmarkService {
  cartList: Product[] = [];


  constructor() { }
  getCart() {
    return this.cartList
  }

  addCart(quantity: number, product: Product) {
    console.log(product);
    console.log(quantity);
    if (this.cartList.includes(product)) {
      alert(`alreay ${product.name} exists`)
      return this.cartList
    } else {
      let str_quantity = (quantity as unknown) as string;
      product.quantity = parseInt(str_quantity);
      this.cartList.push(product);
      alert(`add ${quantity} ${product.name} in your cart`)
      return this.cartList
    }
  }
    
  getTotalPrice() {
    let sum:number = 0;
    this.cartList.forEach(item => {
      sum = sum + item.price * parseInt((item.quantity as unknown) as string)
    })
    const sum_fixed = sum.toFixed(2)
    const send_sum = parseFloat(sum_fixed)
    return send_sum
  }

  deleteCart(id: number) {
    this.cartList = this.cartList.filter(item => item.id !== id)
    return this.cartList
  }

  destroyCart() {
    this.cartList = []
    return this.cartList
  }
}
