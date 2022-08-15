import { Injectable } from '@angular/core';
import { Confirm } from '../models/confirm';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationService {
  // @ts-ignore
  confirm: Confirm[] = [];

  constructor() { }

  getPayment(confirmation: Confirm): void {
    this.confirm.push(confirmation)
  }
}
