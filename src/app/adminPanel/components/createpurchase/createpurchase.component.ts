import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.mode';
import { Vendor } from '../../models/Vendor.model';
import { ProductService } from '../../services/productService/product.service';
import { VendorService } from '../../services/vendorService/vendor.service';


@Component({
  selector: 'app-createpurchase',
  templateUrl: './createpurchase.component.html',
  styleUrls: ['./createpurchase.component.css']
})
export class CreatepurchaseComponent implements OnInit {
  
  displayedColumns: string[] = ['Detail ID', 'Purchase ID', 'Product Name','Qauntity', 'Unit Price','SubTotal', 'Date', 'Actions'];

  allVendor!:Vendor[];
  allProduct!:Product[];

  constructor(
   private vendorService:VendorService,
   private productService:ProductService

  ) { }

  ngOnInit(): void {
    this.getAllVendor();
    this.getAllProduct();

  }


  getAllVendor(){
   this.vendorService.getAllVendor().subscribe((data)=>{
    this.allVendor = data;
   })
  }

  getAllProduct(){
    this.productService.getAllProduct().subscribe((data)=>{
     this.allProduct = data;
    })
   }


 
  }

  


