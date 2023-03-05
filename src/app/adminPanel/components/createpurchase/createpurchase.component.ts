import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../models/product.mode';
import { Purchase } from '../../models/Purchase.model';
import { Vendor } from '../../models/Vendor.model';
import { ProductService } from '../../services/productService/product.service';
import { PurchaseService } from '../../services/purchaseService/purchase.service';
import { VendorService } from '../../services/vendorService/vendor.service';


@Component({
  selector: 'app-createpurchase',
  templateUrl: './createpurchase.component.html',
  styleUrls: ['./createpurchase.component.css']
})
export class CreatepurchaseComponent implements OnInit {
  
  displayedColumns: string[] = ['Detail ID', 'Purchase ID', 'Product Name','Qauntity', 'Unit Price','SubTotal', 'Date', 'Actions'];
  dataSource!: MatTableDataSource<Purchase>;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  msg="";



  allVendor!:Vendor[];
  allProduct!:Product[];

  constructor(
   private vendorService:VendorService,
   private productService:ProductService,
   public purchaseService:PurchaseService

  ) { }

  ngOnInit(): void {
    this.getAllVendor();
    this.getAllProduct();
    this.getAllPurchase();

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

   togglePanel() {
    this.purchaseService.panelOpenState = !this.purchaseService.panelOpenState
  }

  createOrUpdatePurchase(currentPurchase: Purchase) {

    if (currentPurchase.purchase_id != null) {
      this.updatePurchase(currentPurchase);
    } else {
      this.createPurchase(currentPurchase);
    }

    this.msg="Saved Successfully!!"
  }

  createPurchase(pur: Purchase) {
    this.purchaseService.createPurchase(pur).subscribe();
  }

  updatePurchase(pur: Purchase) {
    this.purchaseService.updatePurchase(pur).subscribe();
  }

  deletePurchase(purchase_id: number) {
    this.purchaseService.deletePurchase(purchase_id).subscribe();
  }

  editPurchase(pur: Purchase) {
    this.purchaseService.currentPurchase = Object.assign({}, pur);
    this.togglePanel();
  }
  
  getAllPurchase(){
    this.purchaseService.getAllPurchase().subscribe(
      (data: Purchase[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

 
  }

  


