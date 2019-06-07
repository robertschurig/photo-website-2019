import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ImageCollection } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(private http: HttpClient) {
  }

  public getImages(id: string): Observable<ImageCollection[]> {
    return this.http.get<ImageCollection[]>(`./assets/img/sport/${id}/index.json`);
  }
}
