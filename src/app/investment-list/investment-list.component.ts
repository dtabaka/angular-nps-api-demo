import { Component, OnInit } from '@angular/core';
import { InvestmentService } from '../services/investment.service';
import { Investment } from '../interfaces/investment';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss']
})

export class InvestmentListComponent implements OnInit {

  investments : Investment[] = [];

  constructor(private _investmentService: InvestmentService) {
  
  }

  ngOnInit(): void {
    this.getInvestments();
  }

  getInvestments() {
    this._investmentService.getInvestments().subscribe(data => {
        this.investments = data;
      }
    )
  }

}
