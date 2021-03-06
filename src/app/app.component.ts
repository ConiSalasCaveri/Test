import { Component } from '@angular/core';
import { ProductService } from './Products/product.service'
@Component({
selector:'pmconi',
template:`<div>
              <nav class='navbar navbar-default'>
                  <div class= 'container-fluid'>
                      <a class= 'navbar-brand'>{{pageTitle}}</a>
                      <ul class= 'nav navbar-nav'>
                          <li><a [routerLink]= "['/welcome']" >Home</a></li>
                          <li><a [routerLink]= "['/products']">Product List</a></li>
                      </ul>
                  </div>
              </nav>
              <div class='container'>
                  <router-outlet></router-outlet>
              </div>
          </div>`,
})
export class AppComponent{
  pageTitle: string='Vamos a vender unos productishos';
}
