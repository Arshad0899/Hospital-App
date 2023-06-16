import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hospital-app';

  sideNavStatus: boolean = false;

  showHeader = true;
  showSideNav = true;

  buttonClass:any = []

  constructor(private router: Router) { 
    this.router.events.subscribe(
      (val) => {
        if(val instanceof NavigationEnd) {
          if(val.url == '/login' || val.url == '/' || val.url == '' || val.url == '/**' ) {
            this.showHeader = false;
            this.showSideNav = false;

            this.buttonClass = [
              'body-login'
            ];

          } else if (val.url == '/signup') {
            this.showHeader = true;
            this.showSideNav = false;

            this.buttonClass = [
              'body-login'
            ];
          } else {
            this.showHeader = true;
            this.showSideNav = true;

            this.buttonClass = [
              'login'
            ];
          }
        }
      }
    )
  }


  ngOnInit(): void {
    

  }

}
