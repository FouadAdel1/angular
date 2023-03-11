import { ActivatedRoute, Router } from '@angular/router';
import { products } from './../../model/Products';
import { ProductService } from 'src/app/services/product.service';
import { Iproduct as Product } from './../../model/iproduct';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent {
  constructor(private serviceProduct: ProductService ,private Router:Router) { }

  createFrom = new FormGroup({
    productName: new FormControl(null,[Validators.required]),
    price: new FormControl(null,[Validators.required,Validators.min(1000)]),
    quantity: new FormControl(null,[Validators.required]),
  });
  get name() { return this.createFrom.controls.productName; }
  get price() { return this.createFrom.controls.price; }
  get quantity() { return this.createFrom.controls.quantity; }

  onsubmit() {
    this.serviceProduct.createproduct(this.createFrom.value).subscribe({ next: (response) => { this.Router.navigate(['/product'])  } })
  }
}
