import { Component, OnInit } from '@angular/core';
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: "pm-product",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imgWidth: number = 50;
    imgMargin: number = 2;
    showImages: boolean = false;

    
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filtredProducts = this.listFilter? this.performFilter(this.listFilter):this.products;
    }
    filtredProducts: IProduct[];
    products: IProduct[] = [];

    constructor(private _productService: ProductService){
    }

    performFilter(filterBy:string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !==-1);
    }

    toogleImage(): void {
        this.showImages = !this.showImages;
    }

    ngOnInit(): void {
        this.products= this._productService.getProducts();
        this.filtredProducts = this.products;
    }

    onRatingClicked(message:string):void{
        console.log(message)
    }
}