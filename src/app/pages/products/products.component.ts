import { Component, OnInit, inject } from '@angular/core';
import { ProductApiService } from '../../services/product-api.service';
import { Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { TruncatePipe } from '../../truncate.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe, TruncatePipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  productList: Product [] = [];

  private _apiService = inject(ProductApiService);
  private _router = inject(Router);

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((products: Product[]) => {
      this.productList = products;
    });
  }

  navegate(product: number): void {
    this._router.navigate(['/products', product]);
  }
}
