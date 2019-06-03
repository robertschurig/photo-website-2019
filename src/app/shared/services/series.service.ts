import { Injectable } from '@angular/core';
import { ImageGridItem } from '../components/img-grid/img-grid.models';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private colorGelImages: ImageGridItem[];

  constructor(private http: HttpClient) {
  }

  public getColorGelImages(): Observable<ImageGridItem[]> {
    return this.colorGelImages ? of(this.colorGelImages)
      : this.http.get<ImageGridItem[]>('./assets/img/color-gel.json')
        .pipe(
          map((data) => {
            this.colorGelImages = data;
            return data;
          })
        );
  }
}
