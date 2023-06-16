import { Component, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggleMenu = false;

  @ViewChild('menuTrigger') 
  menuTrigger: MatMenuTrigger | undefined;

  username: string = 'Dr. Snehal';
  role: string = 'Chief Surgeon'

  @Output() sideNavToggled = new EventEmitter<boolean>(); 
  menuStatus: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  SideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

  showMenu() {
    this.toggleMenu = !this.toggleMenu;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInsideMenu = target.closest('button'); // Check if the clicked element is inside the menu

    if (!clickedInsideMenu) {
      this.toggleMenu = false;
    }
  }

}
