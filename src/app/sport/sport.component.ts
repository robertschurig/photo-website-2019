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
        link: 'athletics',
        text: 'Athletics',
      },
      {
        link: 'gymnastics',
        text: 'Gymnastics',
      }
    ];
  }
}
