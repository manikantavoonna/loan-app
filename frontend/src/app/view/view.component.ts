import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AngularCsv } from 'angular-csv-ext/dist/Angular-csv';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  //loanForm !: FormGroup
  displayedColumns = [
    'creance',
    'dateMaj',
    // 'weight',
    // 'symbol',
    // 'position',
    // 'weight',
    // 'symbol',
    // 'star',
  ];
  dataSource = ELEMENT_DATA;

  loanForm = new FormGroup({
    typicalExclusion: new FormControl()
  });

  loans: any;
  // dataSource : any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // this.activatedRouter.queryParams.subscribe(params => {
    //  console.log( params['name']);
    // });

    let loanData = this.api.getAllLoan();
    this.loans = loanData;
    // this.dataSource = loanData;

    this.loans.forEach((item: any) => {
      console.log(item);
    });
  }

  export() {
    // this.status = ["approved", "rejected", "pending"];
   

    const options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Loan Data',
      useBom: true,
      noDownload: true,
      headers: ["Creance", "Date"],
      useHeader: false,
      nullToEmptyString: true,
    };
    new AngularCsv(this.loans, 'Loan Data');
  }

  cancel() {

  }

}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
