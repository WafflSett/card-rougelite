import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICard } from '../models/arena/card';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  getSpells() : Observable<ICard[]> {
    return this.http.get<ICard[]>(`${this.apiUrl}/spells`);
  }
  getUnits() : Observable<ICard[]> {
    return this.http.get<ICard[]>(`${this.apiUrl}/units`);
  }
}
