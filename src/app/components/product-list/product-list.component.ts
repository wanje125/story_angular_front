import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductDataService } from '../../services/product-data.service'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product_list: Product[] = [];
  title: string = "Coupang"
  constructor(private productDataService: ProductDataService) { }

  ngOnInit(): void {
    this.productDataService.getProducts().subscribe((res) =>
    { this.product_list = res; });
  }

}
