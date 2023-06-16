import { Injectable } from '@angular/core';

export class Appointment {
  text: any;
  startDate: any;
  endDate: any;
  allDay?: boolean;
//   recurrence?: any;
}

const appointments: Appointment[] = [
  {
      text: "Patient consultations",
      startDate: new Date("2023-05-30T10:45:00.000"),
      endDate: new Date("2023-05-30T11:45:00.000")
  }, {
      text: "Meet Dr. Bhavya",
      startDate: new Date("2023-05-24T09:00:00.000"),
      endDate: new Date("2023-05-24T11:00:00.000")
  }, {
      text: "Heart Sergery",
      startDate: new Date("2023-05-28T10:15:00.000"),
      endDate: new Date("2023-05-28T13:30:00.000")
  }, {
      text: "Alltend Meeting on Covid",
      startDate: new Date("2023-05-26T09:00:00.000"),
      endDate: new Date("2023-05-26T12:00:00.000"),
      allDay: true,
    //   recurrence: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
  }, {
      text: "Prepare Presentation Plan",
      startDate: new Date("2023-05-27T01:00:00.000"),
      endDate: new Date("2023-05-27T02:30:00.000")
  }, {
      text: "Visit Anotomy class",
      startDate: new Date("2023-05-23T13:00:00.000"),
      endDate: new Date("2023-05-23T15:00:00.000"),
    //   recurrence: "FREQ=WEEKLY;INTERVAL=2;COUNT=2"
  }, {
      text: "Meeting of Instructors",
      startDate: new Date("2023-05-24T10:00:00.000"),
      endDate: new Date("2023-05-24T11:15:00.000"),
    //   recurrence: "FREQ=DAILY;BYDAY=WE;UNTIL=20211001"
  }, {
      text: "Attend Women health camp",
      startDate: new Date("2023-05-25T11:00:00.000"),
      endDate: new Date("2023-05-25T12:00:00.000"),
    //   recurrence: "FREQ=YEARLY",
  }, {
      text: "Monthly Planning",
      startDate: new Date("2023-06-01T11:30:00.000"),
      endDate: new Date("2023-06-01T12:45:00.000"),
    //   recurrence: "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1"
  }, {
      text: "Open Day",
      startDate: new Date("2023-06-04T09:30:00.000"),
      endDate: new Date("2023-06-04T19:00:00.000"),
  }
];

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  getAppointments(): Appointment[] {
      return appointments;
  }
}
