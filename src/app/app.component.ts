import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Perform any logic or checks here
    // Redirect to the desired route
    this.router.navigate(['/parks']);
  }

  title = 'angular-app';
}
