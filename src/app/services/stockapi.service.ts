import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stock } from '../models/stock';
import { StockDTO } from '../models/stockDTO';

@Injectable({
  providedIn: 'root'
})
export class StockapiService {
 stocks:Array<Stock> = []
  constructor(private http:HttpClient) { 
    this.http.get<Array<Stock>>('http://localhost:3000/stocks')
    .subscribe((data)=>{
        this.stocks = data;
    })
  }
    addStock(s:Stock){
      let sd = new StockDTO();
       sd.facevalue = s.facevalue;
       sd.ipvalue=s.ipvalue
       sd.name = s.name;
      this.http.post<Stock>('http://localhost:3000/stocks',sd)
      .subscribe({
        next:(res)=>{
        this.stocks.push(res)
        alert(JSON.stringify(res))
      },
      error:(error)=>{alert(JSON.stringify(error))}})
    }
    getAllStocks(){
      return this.stocks;
    }
    getStockById(param1:any):Stock | undefined{
      return  this.stocks.find((s)=>s.id==param1)
    }
}
