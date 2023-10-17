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
            return { ...item, imagensUrl };
          });
        return this.cacheNews.getValue().items;
      })
    )
  }

  clearCache(){
    this.cacheNews = new BehaviorSubject(null);
  }
}
