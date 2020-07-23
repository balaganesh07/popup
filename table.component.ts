import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { DataService } from '../data.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(public dialog: MatDialog, private datas: DataService) { }

  ngOnInit(): void {
    
  }
  
  get itemData() {
    return this.datas.getAllItems();
  }

  addItem() {
   const dr= this.dialog.open(PopupComponent, { data: {} });
  }

}