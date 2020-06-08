import { Component, OnInit } from '@angular/core';
import { ReportFacilityRes } from '../table1.fixture';

export interface IReportFacility {
  keyValue: string;
  size: number;
  title: string;
  bookingStartDateTime: Date;
  bookingEndDateTime: Date;
  noOfSeats: string;
  feesPaid: number;
  bookedBy: string;
  bookedAt: Date;
}

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.scss'],
})
export class Table1Component implements OnInit {
  displayedColumns: string[] = ['title', 'bookingStartDateTime', 'bookingEndDateTime', 'noOfSeats', 'feesPaid', 'bookedBy', 'bookedAt'];
  dataSource: IReportFacility[] = [];
  copyTitle: string;
  constructor() {}

  ngOnInit(): void {
    ReportFacilityRes.subscribe((res) => {
      const responseKey = Object.keys(res);
      responseKey.forEach((key) => {
        if (res[key].length > 0) {
          res[key].forEach((obj) => {
            const reportFacility: IReportFacility  = {
              keyValue: key,
              size: res[key].length,
              title: obj.name,
              bookingStartDateTime: new Date(+obj.bookingStartDateTime),
              bookingEndDateTime: new Date(+obj.bookingEndDateTime),
              noOfSeats: obj.noOfSeats,
              feesPaid: obj.feesPaid,
              bookedBy: obj.bookedBy,
              bookedAt: new Date(+obj.bookedAt)
            };
            this.dataSource.push(reportFacility);
          });
        }
      });
    });
  }

  isTitle(title: string): boolean {
    if (title !== this.copyTitle) {
      this.copyTitle = title;
      return true;
    }
  }
}
