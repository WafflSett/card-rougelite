import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISpell, IUnit } from '../models/arena/card';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl = "http://localhost:3001";
  constructor(private http: HttpClient) {}

  getSpells() : Observable<ISpell[]> {
    return this.http.get<ISpell[]>(`${this.apiUrl}/spells`);
  }
  getUnits() : Observable<IUnit[]> {
    return this.http.get<IUnit[]>(`${this.apiUrl}/units`);
  }
}
