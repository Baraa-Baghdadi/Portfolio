import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DialogData } from '../my-portfolio/my-portfolio.component';
@Component({
  selector: 'app-dialog-for-img',
  templateUrl: './dialog-for-img.component.html',
  styleUrls: ['./dialog-for-img.component.css']
})
export class DialogForImgComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogForImgComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

  ngOnInit(): void {
  }

}
