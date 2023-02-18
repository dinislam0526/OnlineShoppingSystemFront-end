import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Coupon } from '../../models/coupon.model';
import { CouponService } from '../../services/couponService/coupon.service';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent {

  displayedColumns: string[] = ['Coupon ID', 'Coupon Code','Coupon Description', 'Coupon percentage', 'Actions'];
  dataSource!: MatTableDataSource<Coupon>;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  msg="";
  constructor(
    public couponService: CouponService
  ) { }

  ngOnInit(): void {
    this.getAllCoupon();
    this.couponService.refreshNeed.subscribe(() => {
      this.getAllCoupon();
    });
     
  }

  togglePanel() {
    this.couponService.panelOpenState = !this.couponService.panelOpenState
  }

  createOrUpdateCoupon(currentCoupon: Coupon) {

    if (currentCoupon.couponId != null) {
      this.updateCoupon(currentCoupon);
    } else {
      this.createCoupon(currentCoupon);
    }

    this.msg="Saved Successfully!!"
  }

  createCoupon(data: Coupon) {
    this.couponService.createCoupon(data).subscribe();
  }

  updateCoupon(data: Coupon) {
    this.couponService.updateCoupon(data).subscribe();
  }

  deleteCoupon(couponId: number) {
    this.couponService.deleteCoupon(couponId).subscribe();
  }

  editCoupon(cat: Coupon) {
    this.couponService.currentCoupon = Object.assign({}, cat);
    this.togglePanel();
  }
  
  getAllCoupon(){
    this.couponService.getAllCoupon().subscribe(
      (data: Coupon[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  clear() {
    this.couponService.currentCoupon =new Coupon();
    this.msg="";
  }
    
  
}
