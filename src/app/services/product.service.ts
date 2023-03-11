import { products } from './../model/Products';
import { Iproduct } from './../model/iproduct';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  apiurl: any = 'http://localhost:3005/products';

  createproduct(product: any) {
    return this.http.post(this.apiurl, product);
  }

  getAllProducts() {
    return this.http.get(this.apiurl);
  }
  getPdoductById(id: number) {
    return this.http.get(`${this.apiurl}/${id}`);
  }
  updateProductById(id: number, newprodcut: any) {
    return this.http.put(`${this.apiurl}/${id}`, newprodcut);
  }
  deleteProductById(id: number) {
    return this.http.delete(`${this.apiurl}/${id}`);
  }
}
