import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   appointment_date = (d: Date | null): boolean => {
    const a_day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return a_day !== 0 && a_day !== 6;
  };

}
