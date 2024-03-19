import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductApiService } from '../../services/product-api.service';
import { Product } from '../../models/product.model';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, NgClass],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

  private _route = inject(ActivatedRoute);
  private _apiService = inject(ProductApiService);


  loading: boolean = true;
  public product?: Product;

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this._apiService.getProductById(params['id']).subscribe((product: Product) => {
        this.loading = false;
        console.log(product);
        this.product = product;
      });
    });
  }

}
