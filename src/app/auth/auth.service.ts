import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://your-api-url'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  saveReservation(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/reservations`, data);
  }
}