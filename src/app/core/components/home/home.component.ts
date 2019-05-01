import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageGridItem } from '../../../shared/components/img-grid/img-grid.models';
import { HomeService } from '../../../shared/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

  public images: Observable<ImageGridItem[]>;

  constructor(private homeService: HomeService) {
  }

  public ngOnInit(): void {
    this.images = this.homeService.getImages();
  }
}
