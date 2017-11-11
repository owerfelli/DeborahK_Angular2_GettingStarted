import { Component } from '@angular/core';
import { ProductService } from "./products/product.service";

@Component({
  selector: 'pm-root',
  template: `<div><h1>{{pageTitle}}</h1>
    <pm-product></pm-product>
    </div>
  `,
  providers: [ProductService]
})
export class AppComponent{
  pageTitle: string ="Assalemou Alaykom";
}