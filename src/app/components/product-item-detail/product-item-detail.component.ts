import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { CartBookmarkService } from '../../services/cart-bookmark.service';
import { ProductDataService } from '../../services/product-data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  @Output() out: EventEmitter<string> = new EventEmitter
  // @ts-ignore
  product_list: Product[] = [];
  // @ts-ignore
  product: Product;
  selectedNum: number = 1;
  id: number = 0;
  nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  constructor(private cartService: CartBookmarkService, private productDataService: ProductDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('start url')
    const id = this.route.snapshot.paramMap.get('id');
    this.id = parseInt(id as string);
    console.log(this.id)
    const selectedData: Observable<Product[]> = this.productDataService.getProducts()
    // 옵저버블을 처리하는 함수를 정의합니다.
    console.log(selectedData)
    const filtering = pipe(
      // @ts-ignore
      map(p => p.filter(item => item.id == this.id))
    );

    const detail = filtering(selectedData)

    detail.subscribe(x => {
      console.log(x[0])
      this.product = x[0]
    });
  }
  addCart(p: Product): void {
    this.cartService.addCart(this.selectedNum, p);

  }

}
