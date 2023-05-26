import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  errorMessage = "";
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  sub: Subscription | undefined;

  private _listFilter: string = "";
  private _productService;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log("In setter:", value);
    this.filteredProducts = this.performFilter(value);
  }

  constructor(private productService: ProductService){
    this._productService = productService;
  }

  ngOnInit() {
    this.sub = this._productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: error => this.errorMessage = error
    });
  }

  ngOnDestroy(){
    this.sub?.unsubscribe();
  }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Prodcut List: " + message;
  }

}
