import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ImageGridItem } from '../components/img-grid/img-grid.models';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(private http: HttpClient) {
  }

  public getImages(id: string): Observable<ImageGridItem[]> {
    return this.http.get<ImageGridItem[]>(`./assets/img/${id}.json`)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
