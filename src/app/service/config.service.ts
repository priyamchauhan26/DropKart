import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
baseUrldropkart:string|undefined;

  constructor(private http:HttpClient) { }

}
