import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegionService } from './region-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private regionService: RegionService, private router: Router) {}

  ngOnInit() {
    this.regionService.getCountryCode().subscribe({
      next: (countryCode) => {
        if (countryCode === 'IN') {
          this.router.navigate(['/in']);
        } else if (countryCode === 'EU') {
          this.router.navigate(['/eu']);
        }
      },
      error: (err) => {
        console.error('Error fetching country code:', err);
      }
    });
  }
}