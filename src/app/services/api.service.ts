import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators'
import { newsData } from '../types/newsData';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL: string = '';
  private imgBaseUrl: string = '';
  private cacheNews: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
    this.baseURL = environment.newsApi;
    this.imgBaseUrl = environment.imgBaseUrl;
  }


  private formatData(dataString:string):string {
    const parts = dataString.split(' ')[0].split('/');
    if (parts.length !== 3) {
      return dataString;
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

  getData():Observable<newsData[]>{

    if(this.cacheNews.getValue() !== null){      
      return new Observable<newsData[]>( (observ) => {
        observ.next(this.cacheNews.getValue().items)
      })
    }    
    return this.http.get(this.baseURL, {
      params: {
        tipo: 'noticia',
        qtd: '29'
      }
    }).pipe(
      map( (res) => {
        this.cacheNews.next(res);

          this.cacheNews.getValue().items = this.cacheNews.getValue()
          .items.map((item: newsData) => {
            const imgURL = JSON.parse(item.imagens);
            const imagensUrl = {
              image_fulltext: `${this.imgBaseUrl}${imgURL.image_fulltext}`,
              image_intro: `${this.imgBaseUrl}${imgURL.image_intro}`,
            };

            item.data_publicacao = this.formatData(item.data_publicacao);
          
            return { ...item, imagensUrl };
          });
          console.log(this.cacheNews.getValue().items);
        return this.cacheNews.getValue().items;
      })
    )
  }

  clearCache(){
    this.cacheNews = new BehaviorSubject(null);
  }
}
