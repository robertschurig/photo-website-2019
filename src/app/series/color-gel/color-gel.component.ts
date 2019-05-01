import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SeriesService } from '../../shared/services/series.service';
import { ImageGridItem } from '../../shared/components/img-grid/img-grid.models';

@Component({
  selector: 'app-color-gel',
  templateUrl: './color-gel.component.html',
  styleUrls: [ './color-gel.component.scss' ]
})
export class ColorGelComponent implements OnInit {
  public images: Observable<ImageGridItem[]>;

  constructor(private dataService: SeriesService) {
  }

  ngOnInit() {
    this.images = this.dataService.getColorGelImages();
  }

}
