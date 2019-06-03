import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { SportService } from '../../shared/services/sport.service';
import { ImageGridItem } from '../../shared/components/img-grid/img-grid.models';
import { GridSize } from '../../shared/components/img-grid/grid-size';

@Component({
  selector: 'app-sport-detail',
  templateUrl: './detail.component.html',
  styleUrls: [ './detail.component.scss' ]
})
export class DetailComponent implements OnInit {
  public images: Observable<ImageGridItem[]>;
  public gridSize = GridSize.SMALL;
  public selectedImage: ImageGridItem;
  public showImageModal: boolean;

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

  public onImageClicked(img: ImageGridItem) {
    this.selectedImage = img;
    this.showImageModal = true;
  }

  public onImageModaleClosed() {
    this.selectedImage = null;
    this.showImageModal = false;
  }

}
