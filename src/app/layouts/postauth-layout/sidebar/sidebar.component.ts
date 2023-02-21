import { Component, OnInit } from '@angular/core';
import { sideBarRoutes } from './sidebar.config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
 public menuItems:any[] = [];
  constructor() { }
  ngOnInit(): void {
    this.menuItems = sideBarRoutes.filter((menuItem)=>menuItem.isVisible);
  }
}
