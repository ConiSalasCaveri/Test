import { IProducts } from "./product";
import { Injectable } from "@angular/core";
import { importType } from "@angular/compiler/src/output/output_ast";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()


export class ProductService{

private _productUrl = './api/products/products.json';

constructor(private _http : HttpClient){

}

    getProducts():Observable <IProducts[]> {
        return this._http.get<IProducts[]>(this._productUrl)
        .do(data => console.log('Todos: ' + JSON.stringify(data)))    
        .catch(this.handleError);
    }

    private handleError(err:HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}