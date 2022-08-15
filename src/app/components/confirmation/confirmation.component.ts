import { Component, OnInit } from '@angular/core';
import { Confirm } from '../../models/confirm';
import { CartBookmarkService } from '../../services/cart-bookmark.service'
import { ConfirmationService } from '../../services/confirmation.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  // @ts-ignore
  confirm: Confirm;
  fullName: string = '';
  address: string = '';
  creditCardNumber: string = '';
  totalPrice: number = 0
  bought: boolean = false;

  constructor(private router:Router, private cartService: CartBookmarkService, private confirmService: ConfirmationService) { }

  ngOnInit(): void {
    this.totalPrice = this.cartService.getTotalPrice()
  }
  nameChanged(arg:any):void {
    console.log("modelchanged " + arg);
  }
  submitForm(): void {
    const confirmation: Confirm = {
      fullName: this.fullName,
      address: this.address,
      creditCardNumber: this.creditCardNumber,
      total: this.totalPrice
    }
    this.confirmService.getPayment(confirmation)
    this.bought = true;

    this.fullName = ''
    this.address = ''
    this.creditCardNumber = ''
    this.totalPrice = 0

    this.cartService.destroyCart()
    
  }
}
