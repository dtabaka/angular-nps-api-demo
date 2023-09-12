import { Component, OnInit } from '@angular/core';
import { InvestmentService } from '../../services/investment.service';
import { Investment } from '../../interfaces/investment';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.scss']
})

export class InvestmentListComponent implements OnInit {

  isLoggedIn: boolean = false;
  investments : Investment[] = [];

  constructor(private _authService: AuthService, private _investmentService: InvestmentService) {
    this._authService.loginChanged$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
      if (this.isLoggedIn) {
        this.getInvestments();
      } else {
        //Show login button OR show investments list.
      }
    })
  }

  ngOnInit(): void {
    this._authService.isLoggedIn().then(loggedIn => {
      this.isLoggedIn = loggedIn
      if (this.isLoggedIn) {
         this.getInvestments();
      }
    })
  }

  getInvestments() {
    this._investmentService.getInvestments().subscribe(data => {
        this.investments = data;
      }
    )
  }

}
