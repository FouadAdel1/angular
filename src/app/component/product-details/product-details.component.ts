import { Iproduct } from './../../model/iproduct';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId: number = 0;
  product: any = null;
  constructor(
    private productService: ProductService,
    private activateRute: ActivatedRoute
  ) {
    this.productId = Number(activateRute.snapshot.paramMap.get('id'));
    console.log(this.productId);
  }
  ngOnInit(): void {
    this.productService.getPdoductById(this.productId).subscribe({
      next: (response) => (this.product = response),
    });
  }
}
