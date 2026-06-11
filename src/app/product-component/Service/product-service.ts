import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  private apiUrl = `https://dummyjson.com/products`;

  createProduct(product: any) {
    return this.http.post(this.apiUrl + '/add', product);
  }

  getProducts() {
    return this.http.get(this.apiUrl);
  }

  updateProduct(id: number, product: any) {
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
