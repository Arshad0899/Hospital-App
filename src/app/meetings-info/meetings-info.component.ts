import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

// export interface DialogData {
//   agenda: '';
//   attendees: '',
//   time: ''

// }

@Component({
  selector: 'app-meetings-info',
  templateUrl: './meetings-info.component.html',
  styleUrls: ['./meetings-info.component.css']
})
export class MeetingsInfoComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data : any) {
    console.log(data.dia_agenda);
    console.log(data.dia_attendees);
    console.log(data.dia_time);
  }

}

console.log('hello');