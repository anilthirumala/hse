import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
   stocks:Array<Stock> = []
    constructor() { }
    addToStock(s:Stock){
      this.stocks.push(s)
    }
    get Stocks(){
     return this.stocks;
    }
}
