import { Component, Input, OnInit } from '@angular/core';
import { ImageGridItem } from './img-grid.models';

@Component({
  selector: 'app-img-grid',
  templateUrl: './img-grid.component.html',
  styleUrls: [ './img-grid.component.scss' ]
})
export class ImgGridComponent implements OnInit {

  @Input()
  public images: ImageGridItem[];

  @Input()
  public gridSize: string;

  constructor() {
  }

  public ngOnInit(): void {
  }

}
