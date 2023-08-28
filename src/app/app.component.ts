import { Component, OnInit } from '@angular/core';

import { ProductStatus } from './shared/const/product.Enum';
import { Iproduct } from './shared/model/pass';
import { ProductsService } from './shared/services/products.service';
import { UtilityService } from './shared/services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'services';
  getAllStatus =ProductStatus
  public productsArray :Array<Iproduct>=[]

  constructor(private _productService :ProductsService,
    private _utilityService:UtilityService ){}

  ngOnInit(): void {
    this.productsArray = this._productService.getAllProductApi()
  }

  onProductAdd(pname:HTMLInputElement,pdetails:HTMLInputElement){
    let productObj : Iproduct ={
      pname : pname.value,
      pdetails : pdetails.value,
      pStatus : ProductStatus.Inprogress,
      id : this._utilityService.generateUuid()
    }
      pname.value ="";
      pdetails.value = "";
      this._productService.addNewProductCart(productObj)
  }



changeProductStatus(id:string, status:ProductStatus){
console.log(id,status);
  this._productService.updateProductStatus(id,status)
}
}
