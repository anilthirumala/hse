import { Component, Input, OnInit } from '@angular/core';
import { Stock } from '../models/stock';
import { StockService } from '../services/stock.service';
import { StockapiService } from '../services/stockapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-stock',
  templateUrl: './show-stock.component.html',
  styleUrl: './show-stock.component.css'
})
export class ShowStockComponent implements OnInit{
 //@Input() stocks:Array<Stock> = []
 stocks:Array<Stock> =[]
 isEdit=false;
   constructor(private ss:StockapiService,private router:Router){
    this.stocks = this.ss.getAllStocks()
   }
  ngOnInit(): void {
    this.stocks = this.ss.getAllStocks()
  }
   editHandler(id:any){
    this.router.navigate(['showstock','edit',id])
   }
   cancelHandler(){this.isEdit=false;}
}
