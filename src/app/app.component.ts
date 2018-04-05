import { Component } from '@angular/core';
import { ProductService } from './Products/product.service'
@Component({
selector:'pmconi',
template:`<div><h1>{{pageTitle}}</h1>
<productosconi></productosconi>
</div>`,
providers:[ProductService]
})
export class AppComponent{
  pageTitle: string='Vamos a vender unos productishos';
}
