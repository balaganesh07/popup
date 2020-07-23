import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder, private dr: MatDialogRef<PopupComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any, private datas: DataService) { }

    close() {
      this.dr.close();
    }

  ngOnInit(): void {
    this.form= this.fb.group({
      items: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required]
    });
    }

    onSubmit() {
       this.datas.addItem(this.form.value);
       this.dr.close();
      }
}

  



