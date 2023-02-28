import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Vendor } from '../../models/Vendor.model';
import { VendorService } from '../../services/vendorService/vendor.service';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.css']
})
export class AddvendorComponent implements OnInit{

  displayedColumns: string[] = ['Vendor ID', 'Vendor Name', 'Vendor Description', 'Actions'];
 
   dataSource!: MatTableDataSource<Vendor>;
   @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
   msg="";
 
   constructor(
     public vendorService: VendorService
   ) { }
 
   ngOnInit(): void {
     this.getAllVendor();
     this.vendorService.refreshNeed.subscribe(() => {
       this.getAllVendor();
     });
      
   }
 
   togglePanel() {
     this.vendorService.panelOpenState = !this.vendorService.panelOpenState
   }
 
   createOrUpdateVendor(currentVendor: Vendor) {
 
     if (currentVendor.vendorId != null) {
       this.updateVendor(currentVendor);
     } else {
       this.createVendor(currentVendor);
     }
 
     this.msg="Saved Successfully!!"
   }
 
   createVendor(ven: Vendor) {
     this.vendorService.createVendor(ven).subscribe();
   }
 
   updateVendor(ven: Vendor) {
     this.vendorService.updateVendor(ven).subscribe();
   }
 
   deleteVendor(venId: number) {
     this.vendorService.deleteVendor(venId).subscribe();
   }
 
   editVendor(cat: Vendor) {
     this.vendorService.currentVendor = Object.assign({}, cat);
     this.togglePanel();
   }
   
   getAllVendor(){
     this.vendorService.getAllVendor().subscribe(
       (data: Vendor[]) => {
         this.dataSource= new MatTableDataSource (data);
         this.dataSource.paginator = this.paginator;
       }
     );
   }

   clear(){
    this.vendorService.currentVendor = new Vendor();
   }

}
