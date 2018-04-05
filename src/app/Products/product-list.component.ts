import { Component, OnInit } from '@angular/core';
import { IProducts } from './product';
import { ProductService } from './product.service';
@Component({
    selector: 'productosconi',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
pageTitle:string= 'Vamo a probar si funciona';
imageWidth:number=50;
imageMargin:number=2;
showImage: boolean=false;

constructor(private _productService: ProductService){

//npthis.listFilter='Carrito';
}

_listFilter:string;
get listFilter():string{
    return this._listFilter;
}
set listFilter(value:string){
    this._listFilter=value;
    this.filteredProducts= this.listFilter ? this.performFilter(this.listFilter) : this.products;
}


filteredProducts:IProducts[];
products: IProducts[] =[
];

mostrarImagen():void{
this.showImage=!this.showImage;
}

ngOnInit():void{
    this.products=this._productService.getProducts();
    this.filteredProducts=this.products;
}

performFilter( filterby : string ): IProducts[] {
   filterby= filterby.toLocaleLowerCase();
return this.products.filter((product : IProducts) =>
product.productName.toLocaleLowerCase().indexOf(filterby) !== -1);
}

onRatingClicked(message:string):void{
 this.pageTitle='Titulo de la pagina: '+ message;
}
}
