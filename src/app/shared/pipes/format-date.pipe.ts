import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDatePipe'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const parts = value.split(' ')[0].split('/');
    if (parts.length !== 3) {
      return value;
    }
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    
    const monthNames: string[] = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril',
      'Maio', 'Junho', 'Julho', 'Agosto',
      'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    
    
    return `${day}, ${monthNames[parseInt(month) - 1]}, ${year}`;

  }

}
