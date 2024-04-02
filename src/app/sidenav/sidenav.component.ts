import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= false;
  isCollapsed = false;
  showUser  = false;

  constructor(private observer: BreakpointObserver) {}
  
  ngOnInit() {
    this.observer.observe(['(min-width: 1000px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = false;
        this.isCollapsed = false;
      } else {
        this.isMobile = false;
        this.isCollapsed = false;
        this.toggleMenu();
      }
    });
  }
  toggleMenu() {
    if(this.isMobile){
      this.sidenav.open();
      this.isCollapsed = true; 
    } else {
      this.sidenav.open();
      this.isCollapsed = !this.isCollapsed;
    }
  }
  display(){
    this.showUser = !this.showUser; 
  }
  
}
// interface MenuItem {
  //   label: string;
//   iconClass: string;
// }

// menuItems: MenuItem[] = [
//   { label: 'Dashboard', iconClass: 'fa-solid fa-house' },
//   { label: 'Posts', iconClass: 'fa-solid fa-square-pen' },
//   { label: 'Media', iconClass: 'fa-solid fa-image' },
//   { label: 'Pages', iconClass: 'fa-regular fa-file-lines' },
//   { label: 'Comments', iconClass: 'fa-regular fa-comment-dots' },
//   { label: 'Appearance', iconClass: 'fa-solid fa-border-all' },
//   { label: 'Plugins', iconClass: 'fa-solid fa-bag-shopping' },
//   { label: 'Users', iconClass: 'fa-solid fa-users' },
//   { label: 'Settings', iconClass: 'fa-solid fa-gear' },
//   { label: 'Tools', iconClass: 'fa-solid fa-sliders' }
// ];