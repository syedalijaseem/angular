import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from './Service/product-service';

@Component({
  selector: 'app-product-component',
  imports: [],
  templateUrl: './product-component.html',
  styleUrl: './product-component.scss',
})
export class ProductComponent implements OnInit {
  private productService = inject(ProductService);

  products = signal<any[]>([]);
  errorMessage = signal('');

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (res: any) => {
        this.products.set(res.products);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage.set('Failed to get products');
      },
    });
  }
}
