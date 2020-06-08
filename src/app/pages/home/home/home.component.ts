import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: number;
  title: '';
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 0, title: '', position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {id: 1, title: '', position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {id: 2, title: '', position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {id: 3, title: '', position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {id: 4, title: '', position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {id: 5, title: '', position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {id: 6, title: '', position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {id: 7, title: '', position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {id: 8, title: '', position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {id: 9, title: '', position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  length = ELEMENT_DATA.length;
  displayedColumns: string[] = ['title', 'position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
