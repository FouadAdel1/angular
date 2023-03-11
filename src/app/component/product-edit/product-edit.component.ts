import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/model/iproduct';
import { ProductService } from 'src/app/services/product.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  productId: number = 0;
  product: any = {};
  constructor(
    private productservice: ProductService,
    private activeroute: ActivatedRoute,
    private router:Router
  ) {

  }
  ngOnInit(): void {
this.productId = Number(this.activeroute.snapshot.paramMap.get('id'));
    this.productservice.getPdoductById(this.productId).subscribe({
      next: (Response) => {
        this.product = Response;
        console.log(this.product);
        this.eidtFrom.controls['productName'].setValue(this.product.name);
        this.eidtFrom.controls['price'].setValue(this.product.price);
        this.eidtFrom.controls['quantity'].setValue(this.product.quntity);
      },
    });
  }
  eidtFrom = new FormGroup({
    productName: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    quantity: new FormControl(null, [Validators.required]),
  });

  get name() {
    return this.eidtFrom.controls.productName;
  }
  get price() {
    return this.eidtFrom.controls.price;
  }
  get quantity() {
    return this.eidtFrom.controls.quantity;
  }
  onSubmit() {
    this.productservice.updateProductById(this.productId, this.eidtFrom.value).subscribe({
      next: (Response) => { this.router.navigate(['/product']); }
    });
  }
}
