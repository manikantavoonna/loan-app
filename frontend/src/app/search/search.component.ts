import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ValidateComponent } from '../validate/validate.component';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  loanForm !: FormGroup

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router
    // ,
    // private dialogRef:MatDialogRef<SearchComponent>, private dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    this.loanForm = this.formBuilder.group({
      typicalExclusion: ['', Validators.required]

    })
  }


  view() {
    //this.loanForm.reset();
    //this.dialogRef.close('search');
    // this.dialog.open(ViewComponent, {
    //   width:'30%'
    // });
    let te = this.loanForm.value['typicalExclusion'];
    this.router.navigate(['view']);
  }

  validate() {

    // this.dialogRef.close('search');
    console.log(this.loanForm.value);
    let te = this.loanForm.value['typicalExclusion'];
    this.loanForm.reset();
    this.router.navigate(['validate', { name: te }]);
    // this.dialog.open(ValidateComponent, {
    //   width:'30%',
    //   data:{
    //     typicalExclusion:te
    //   }
    // });
  }
}
