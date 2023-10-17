import { Component, Input } from '@angular/core';
import { ECategory, typeBreadcrumbs } from 'src/app/types/newsData';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  @Input()
  tagsData: typeBreadcrumbs[] = [
    
  {
    link: 'ibge',
    name: ECategory.ibge
  },
  {
    link: 'economicas',
    name: ECategory.economicas
  },
  
  {
    link: 'sociais',
    name: ECategory.sociais
  },
  {
    link: 'geociencias',
    name: ECategory.geociencias
  }
  ];

}
