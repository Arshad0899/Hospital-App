import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MeetingsInfoComponent } from '../meetings-info/meetings-info.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['meeting_code', 'agenda', 'organize', 'priority', 'date', 'time', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) 
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(agenda: string, attendees: string, room_no: string, time: string, duration: number ) {
    this.dialog.open(MeetingsInfoComponent, {
     data: {
      dia_agenda: agenda,
      dia_attendees: attendees,
      dia_room_no: room_no,
      dia_time: time,
      dia_duration: duration
     }
    });
    // console.log(agenda);
  }
}

export interface PeriodicElement {
  meeting_code: number;
  agenda: string;
  attendees: string;
  priority: string; 
  duration: number;
  organize: string;
  room_no: string;
  date: string;
  time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    meeting_code: 100332,
    agenda: 'Asthama Care',
    attendees: 'Dr. Bhavya, Dr. snehal, +10',
    priority: 'High',
    duration: 180,
    organize: 'Dr. Desai',
    room_no: '440-A',
    date: '01-06-23',
    time: '10:10 AM'
  },
  {
    meeting_code: 547651,
    agenda: 'Cancer Awarness',
    attendees: 'Dr. Kurpal, Dr. Desai, +5',
    priority: 'Low',
    duration: 200,
    organize: 'Dr. Kurpal',
    room_no: '100-A',
    date: '10-06-23',
    time: '12:00 PM'
  },
  {
    meeting_code: 342101,
    agenda: 'Covid Relif',
    attendees: ' Dr. Arun, Dr. Bhavya, +30',
    priority: 'High',
    duration: 100,
    organize: 'Dr. Arun',
    room_no: 'Seminar Hall',
    date: '02-06-23',
    time: '09:10 AM'
  },
  {
    meeting_code: 482098,
    agenda: 'Female Health Awarness',
    attendees: 'Dr. Bhavya, Dr. Snehal, +8',
    priority: 'High',
    duration: 120,
    organize: 'Dr. Snehal',
    room_no: 'Flemming Room',
    date: '29-05-23',
    time: '01:10 PM'
  },
  {
    meeting_code: 988728,
    agenda: 'Basic Heath Care',
    attendees: 'Dr. Satish, Dr. Krupal, +10',
    priority: 'Low',
    duration: 40,
    organize: 'Dr. Satish',
    room_no: '200-E',
    date: '15-06-23',
    time: '01:10 PM'
  },
  {
    meeting_code: 124353,
    agenda: 'Medical Emergency',
    attendees: 'Dr. Bhavya, Dr. Snehal, +3',
    priority: 'High',
    duration: 120,
    organize: 'Dr. Snehal',
    room_no: 'Profile Room',
    date: '01-06-23',
    time: '05:10 AM'
  },  
  {
    meeting_code: 522231,
    agenda: 'Polio Camp',
    attendees: 'Dr. Satish, Dr. Desai, +3',
    priority: 'Low',
    duration: 90,
    organize: 'Dr. Desai',
    room_no: 'Major Hall',
    date: '31-05-23',
    time: '10:50 AM'
  },
  {
    meeting_code: 453232,
    agenda: 'Board Meeting',
    attendees: 'Dr. Rajesh, Dr. Krupal, +5',
    priority: 'High',
    duration: 150,
    organize: 'Dr. Satish',
    room_no: '300-B',
    date: '14-06-23',
    time: '09:30 AM'
  },
  {
    meeting_code: 453232,
    agenda: 'Cancer Care',
    attendees: 'Dr. Snehal, Dr. Bhavya, +11',
    priority: 'Low',
    duration: 100,
    organize: 'Dr. Snehal',
    room_no: '231-B',
    date: '22-06-23',
    time: '12:10 PM'
  },
  {
    meeting_code: 563422,
    agenda: 'Asthama Care',
    attendees: 'Dr. Bhavya, Dr. Snehal, +3',
    priority: 'Low',
    duration: 120,
    organize: 'Dr. Bhavya',
    room_no: '400-A',
    date: '26-06-23',
    time: '08:10 AM'
  },
  {
    meeting_code: 846872,
    agenda: 'Covid Emerency',
    attendees: 'Dr. Rohit, Dr. Satish, +4',
    priority: 'High',
    duration: 200,
    organize: 'Dr. Rohit',
    room_no: '101-E',
    date: '20-05-23',
    time: '09:10 AM'
  },
  {
    meeting_code: 563422,
    agenda: 'Fitness Care',
    attendees: 'Dr. Bhavya, Dr. Desai, +3',
    priority: 'Low',
    duration: 120,
    organize: 'Dr. Bhavya',
    room_no: '102-A',
    date: '02-06-23',
    time: '5:10 PM'
  },
  {
    meeting_code: 534534,
    agenda: 'Men Health Care',
    attendees: 'Dr. Satish, Dr. Rohit, +1',
    priority: 'Low',
    duration: 100,
    organize: 'Dr. Satish',
    room_no: '202-B',
    date: '31-05-23',
    time: '06:10 PM'
  },
  ];
