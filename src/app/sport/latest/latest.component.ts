import { Component, OnInit } from '@angular/core';
import { SportService } from '../../shared/services/sport.service';
import { Observable } from 'rxjs';
import { ImageGridItem } from '../../shared/components/img-grid/img-grid.models';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: [ './latest.component.scss' ]
})
export class LatestComponent implements OnInit {
  public images: Observable<ImageGridItem[]>;

  constructor(private sportService: SportService) {
  }

  public ngOnInit(): void {
    this.images = this.sportService.getLatestImages();
  }

}
