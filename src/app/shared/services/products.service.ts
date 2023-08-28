import { Injectable } from '@angular/core';
import { ProductStatus } from '../const/product.Enum';
import { Iproduct } from '../model/pass';
import { SanckbarService } from './sanckbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public productArray : Array<Iproduct> = [
    {
      pname : "Samsung 31",
      pdetails : "Mobile 128 6",
      pStatus : ProductStatus. Inprogress,
      id : "qwerty345wertyu"
    },
    {
      pname : "Samsung 532",
      pdetails : "Mobile 128 6",
      pStatus : ProductStatus. Dispatched,
      id : "ghjk15678rtyui"
    }
  ]
  constructor(private _sanckbar : SanckbarService) { }

  getAllProductApi(){
    return this.productArray;
  }

  addNewProductCart(prodObj : Iproduct){
    this.productArray.unshift(prodObj);
    this._sanckbar.createSanckbar(`The new product ${prodObj.pname} is added to the cart`, 'Close')
  }

  updateProductStatus(id : string, newStatus : ProductStatus){
    this.productArray.forEach(ele =>{
      if(ele.id === id){
        ele.pStatus = newStatus;
        this._sanckbar.createSanckbar(`The status of the product ${ele.pname} is changed to ${newStatus}`, 'Close');
        return 
      }
    })
  }
}
