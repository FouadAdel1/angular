import { Iproduct } from './../../model/iproduct';

import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prodcut',
  templateUrl: './prodcut.component.html',
  styleUrls: ['./prodcut.component.css'],
})
export class ProdcutComponent implements OnInit {
  productlist: any = [];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (response) => (this.productlist = response),
    });
  }

  delete(id: number) {
    console.log(id);
    this.productService.deleteProductById(id).subscribe({
      next: (response) => {this.productlist=this.productlist.filter((p:any) => p.id!=id) }
     });
  }
}
