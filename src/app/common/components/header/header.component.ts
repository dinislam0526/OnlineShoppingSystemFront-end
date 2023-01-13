import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  private _toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  
  public get toggleSideBarForMe(): EventEmitter<any> {
    return this._toggleSideBarForMe;
  }
  public set toggleSideBarForMe(value: EventEmitter<any>) {
    this._toggleSideBarForMe = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();
  }
 
}
