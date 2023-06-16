import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})

export class SideNavComponent implements OnInit {

  @Input() sideNavStatus: boolean = false;

  list = [
    {
      id: 1,
      name: 'Home',
      icon: '../../assets/logo/home-logo.svg',
      router: '/home'
    },
    {
      id: 2,
      name: 'Meetings',
      icon: '../../assets/logo/people-group.svg',
      router: '/meetings'
    },
    {
      id: 3,
      name: 'Appointment',
      icon: '../../assets/logo/calendar-check.svg',
      router: '/appointments'
    },
    {
      id: 4,
      name: 'Patients',
      icon: '../../assets/logo/bed-pulse.svg',
      router: '/patients'
    }
  ]

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  onClick(id: number) {
    console.log('button clicked'); 
    this.router.navigate([this.list[(id - 1)].router]);
  }

}
