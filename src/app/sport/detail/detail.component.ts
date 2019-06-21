import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { SportService } from '../../shared/services/sport.service';
import { ImageGridItem } from '../../shared/components/img-grid/img-grid.models';
import { GridSize } from '../../shared/components/img-grid/grid-size';
import { ImageCollection } from '../../shared/models';

@Component({
  selector: 'app-sport-detail',
  templateUrl: './detail.component.html',
  styleUrls: [ './detail.component.scss' ]
})
export class DetailComponent implements OnInit {
  public images: Observable<ImageCollection[]>;
  public gridSize = GridSize.SMALL;

  constructor(private sportService: SportService,
              private activeRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (params) => this.images = this.sportService.getImages(this.replaceDashWithUnderline(params.id)));
  }

  private replaceDashWithUnderline(value: string): string {
    return value.replace(/-/g, '_');
  }

}
