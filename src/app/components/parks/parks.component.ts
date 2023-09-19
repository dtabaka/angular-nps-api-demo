import { Component } from '@angular/core';
import { NpsService } from '../../services/nps.service';
import { ParkResponse } from '../../interfaces/park';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.scss']
})

export class ParksComponent {

  isLoggedIn: boolean = false;
  response : ParkResponse

  constructor(private _authService: AuthService, private _npsService: NpsService) {}

  ngOnInit(): void {
    this.getParks();
  }

  getParks() {
    this._npsService.getParks().subscribe(response => {
        this.response = response;
      }
    )
  }

}
