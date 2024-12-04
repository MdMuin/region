import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private readonly API_URL = 'https://ipapi.co/json/';
  
  constructor(private http: HttpClient) {}

  getCountryCode(): Observable<String> {
    return this.http.get<any>(this.API_URL).pipe(
      map(response => response.country_code) 
    );
  }
}