import { Component, OnInit } from '@angular/core';

const MonthList = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

interface Report {
  BookingStartDate: Date;
  BookingEndDate: Date;
  NoOfSeat: number;
  FeePaid: number;
  BookedBy: string;
  BookedDate: Date;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  ReportData: Report[] = [
    {
      BookingStartDate: new Date(2020, 6, 9, 9, 0, 0),
      BookingEndDate: new Date(2020, 6, 9, 10, 0, 0),
      NoOfSeat: 1,
      FeePaid: 0,
      BookedBy: 'alex',
      BookedDate: new Date(2020, 4, 12, 13, 24, 35),
    },
    {
      BookingStartDate: new Date(2020, 6, 8, 9, 0, 0),
      BookingEndDate: new Date(2020, 6, 8, 10, 0, 0),
      NoOfSeat: 1,
      FeePaid: 0,
      BookedBy: 'alex',
      BookedDate: new Date(2020, 4, 12, 13, 19, 43),
    },
    {
      BookingStartDate: new Date(2020, 4, 19, 16, 0, 0),
      BookingEndDate: new Date(2020, 4, 19, 16, 30, 0),
      NoOfSeat: 2,
      FeePaid: 0,
      BookedBy: 'alex',
      BookedDate: new Date(2020, 4, 12, 13, 7, 49),
    },
    {
      BookingStartDate: new Date(2020, 6, 9, 9, 0, 0),
      BookingEndDate: new Date(2020, 6, 9, 10, 0, 0),
      NoOfSeat: 1,
      FeePaid: 0,
      BookedBy: 'alex',
      BookedDate: new Date(2020, 4, 12, 13, 24, 35),
    },
    {
      BookingStartDate: new Date(2020, 6, 8, 9, 0, 0),
      BookingEndDate: new Date(2020, 6, 8, 10, 0, 0),
      NoOfSeat: 1,
      FeePaid: 0,
      BookedBy: 'alex',
      BookedDate: new Date(2020, 4, 12, 13, 19, 43),
    },
    {
      BookingStartDate: new Date(2020, 4, 19, 16, 0, 0),
      BookingEndDate: new Date(2020, 4, 19, 16, 30, 0),
      NoOfSeat: 2,
      FeePaid: 0,
      BookedBy: 'alex',
      BookedDate: new Date(2020, 4, 12, 13, 7, 49),
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  getDate(date: Date): string {
    const hour = date.getHours() <= 11 ? date.getHours() : date.getHours() - 12;
    const shift = date.getHours() <= 11 ? 'AM' : 'PM';
    return (
      MonthList[date.getMonth()] +
      ' ' +
      date.getDate() +
      ', ' +
      date.getFullYear() +
      ', ' +
      hour +
      ':' +
      date.getMinutes() +
      ':' +
      date.getSeconds() +
      ' ' +
      shift
    );
  }
}
