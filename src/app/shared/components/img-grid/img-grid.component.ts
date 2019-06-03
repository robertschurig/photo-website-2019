import { Component, Input, OnInit } from '@angular/core';
import { ImageGridItem } from './img-grid.models';
import { GridSize } from './grid-size';

@Component({
  selector: 'app-img-grid',
  templateUrl: './img-grid.component.html',
  styleUrls: [ './img-grid.component.scss' ]
})
export class ImgGridComponent implements OnInit {
  public gridSizes = GridSize;

  @Input()
  public images: ImageGridItem[];

  @Input()
  public gridSize: GridSize;

  constructor() {
  }

  public ngOnInit(): void {
  }

}
