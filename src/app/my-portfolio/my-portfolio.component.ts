import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DialogForImgComponent } from '../dialog-for-img/dialog-for-img.component';
export interface DialogData {
  img : string ;
  title : string ;
}
@Component({
  selector: 'app-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.css']
})
export class MyPortfolioComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(src:any,title:any): void {
    const dialogRef = this.dialog.open(DialogForImgComponent, {
      width: '600px',
      height: 'fit-content',
      data: {img : src , title:title},
      maxHeight:'90vh'
    });
  }
}
