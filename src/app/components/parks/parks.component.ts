import { Component } from '@angular/core';
import { NpsService } from '../../services/nps.service';
import { ParkResponse } from '../../interfaces/park';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.scss']
})

export class ParksComponent {

  isLoggedIn: boolean = false;
  response : ParkResponse
  isLoading: boolean = false;

  constructor(private _npsService: NpsService) {}

  ngOnInit(): void {
    this.getParks();
  }

  getParks() {
    this.isLoading = true;
    this._npsService.getParks().subscribe(response => {
        this.response = response;
        this.isLoading = false;
      }
    )
  }

}
