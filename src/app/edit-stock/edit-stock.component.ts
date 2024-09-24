import { Component } from '@angular/core';
import { Stock } from '../models/stock';
import { ActivatedRoute, Router } from '@angular/router';
import { StockapiService } from '../services/stockapi.service';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrl: './edit-stock.component.css'
})
export class EditStockComponent {
    id?:string;
    s:Stock = new Stock();
  constructor(private ar:ActivatedRoute,private stockres:StockapiService,private router:Router){
      this.ar.params.subscribe((p)=>{
        this.id = p['id']
        this.s = this.stockres.getStockById(this.id) ?? new Stock();
      })
  }
 
    editHandler(){}
    cancelHandler(){this.router.navigate(['showstock'])}
}
