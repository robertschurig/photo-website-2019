import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ImageGridItem } from '../components/img-grid/img-grid.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortraitService {

  private cache: ImageGridItem[];

  constructor(private http: HttpClient) {
  }

  public getImages(): Observable<ImageGridItem[]> {
    return this.cache ? of(this.cache)
      : this.http.get<ImageGridItem[]>('./img/portrait.json')
        .pipe(
          map((data) => {
            this.cache = data;
            return data;
          })
        );
  }
}
