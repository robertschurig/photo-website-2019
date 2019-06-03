import { Component, OnInit } from '@angular/core';
import { SectionLink } from '../../../shared/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
  public mobileMenuActive = false;
  public sectionLinks: SectionLink[];
  public title: string;

  constructor() {
  }

  public ngOnInit(): void {
    this.title = 'Robert Schurig';
    this.sectionLinks = this.getAppLinks();
  }

  private getAppLinks(): SectionLink[] {
    return [
      {
        link: 'portrait',
        text: 'Portrait',
      },
      // {
      //   link: 'series',
      //   text: 'series',
      // },
      {
        link: 'sport',
        text: 'Sport',
      },
      {
        link: 'contact',
        text: 'Contact',
      }
    ];
  }
}
