import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

import { IProduct } from './product'
import { HttpErrorResponse } from '@angular/common/http/src/response';
@Injectable()
export class ProductService {
    private _productUrl= './api/products/products.json'

    constructor (private _http: HttpClient){}
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
        .do(data=>console.log(data))
        .catch(this.handleErr);
    }
    private handleErr(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message)
    }
}