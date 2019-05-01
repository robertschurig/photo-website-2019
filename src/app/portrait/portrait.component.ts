import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageGridItem } from '../shared/components/img-grid/img-grid.models';
import { PortraitService } from '../shared/services/portrait.service';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: [ './portrait.component.scss' ]
})
export class PortraitComponent implements OnInit {
  public images: Observable<ImageGridItem[]>;

  constructor(private portraitService: PortraitService) {
  }

  public ngOnInit(): void {
    this.images = this.portraitService.getImages();
  }
}
