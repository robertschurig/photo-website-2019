import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ImageGridItem } from '../components/img-grid/img-grid.models';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  private latestImages: ImageGridItem[];

  constructor(private http: HttpClient) {
  }

  public getLatestImages(): Observable<ImageGridItem[]> {
    return this.latestImages ? of(this.latestImages)
      : this.http.get<ImageGridItem[]>('./data/istaf_2016.json')
        .pipe(
          map((data) => {
            this.latestImages = data;
            return data;
          })
        );
  }
}
