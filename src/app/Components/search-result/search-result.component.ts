import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductControllerService } from 'src/app/Api/services';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  searchFor: string = '';
  products: Array<Product>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductControllerService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchFor = params['val'];
      this.productService
        .searchProductUsingGET(this.searchFor)
        .subscribe((v) => {
          this.products = v.data as Array<Product>;
        });
    });
  }
}

interface Product {
  id: string;
  brand: string;
  description: string;
  image: string;
  price: number;
  priceDiscount: number;
  discount: number;
}
