import { Component } from '@angular/core';
import { Stock } from '../models/stock';
import { StockService } from '../services/stock.service';
import { StockapiService } from '../services/stockapi.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrl: './add-stock.component.css',  
})
export class AddStockComponent {
  addstyle ='background-color:yellow;width:50%;margin:auto;margin-top:25px'
  bgcolor="chocolate"
  s:Stock = new Stock();
  constructor(private restService:StockapiService){}
 addHandler(){
   this.restService.addStock(this.s);
   this.s = new Stock();
 }
}
