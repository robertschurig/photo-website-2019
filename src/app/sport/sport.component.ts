import { Component, OnInit } from '@angular/core';
import { SectionLink } from '../shared/models';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: [ './sport.component.scss' ]
})
export class SportComponent implements OnInit {
  public sectionLinks: SectionLink[];

  constructor() {
  }

  public ngOnInit(): void {
    this.sectionLinks = this.getSectionLinks();
  }

  private getSectionLinks(): SectionLink[] {
    return [
      {
        link: 'istaf-2016',
        text: 'ISTAF 2016',
      },
      {
        link: 'istaf-indoor-2016',
        text: 'ISTAF INDOOR 2016',
      },
      {
        link: 'istaf-2015',
        text: 'ISTAF 2015',
      },
      {
        link: 'berlin-masters-rsg-2015',
        text: 'Berlin Masters RSG 2015',
      }
    ];
  }
}
