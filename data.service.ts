import { Injectable } from '@angular/core';
import { item } from './item';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemList: item[] = []

  constructor() { }

  addItem(items: item) {
    this.itemList.push(items);
  }

  getAllItems() {
   return this.itemList;
  }
  
}
