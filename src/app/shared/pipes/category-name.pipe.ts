import { Pipe, PipeTransform } from '@angular/core';
import { ECategory } from 'src/app/types/newsData';

@Pipe({
  name: 'categoryName'
})
export class CategoryNamePipe implements PipeTransform {

  transform(value: string | null, ...args: unknown[]): unknown {

      switch (value) {
        case 'news':
          return 'Notícias';
        case 'economicas':
          return ECategory.economicas;
        case 'ibge':
          return ECategory.ibge;
        case 'sociais':
          return ECategory.sociais;
        case 'geociencias':
          return ECategory.geociencias;
        default:
          return value;
      }
    
  }

}
