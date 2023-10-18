import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { newsData, typeNews } from 'src/app/types/newsData';

@Component({
  selector: 'app-page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class PageHome {
  getBigNews!: newsData;
  getFeaturedNews: newsData[] = [];
  getHotNews: typeNews[] = [];
  getLatestNews: newsData[] = [];

  constructor(private serviceApi: ApiService) {}

  private heroSection(value:newsData[]){
    value.map( (item, i) => {
      if(i == 0){
        this.getBigNews = item;
      }else
      if(i > 0 && i <= 2){
        this.getFeaturedNews.push(item)
      }
    }) 
  }

  private hotNews(value:newsData[]){
    value.map( (item, i) => {
      if( i <= 7 ){
        this.getHotNews.push({ url: `/post/${item.id}`, title: item.titulo})
      }
    })
  }

  private latestNews(value:newsData[]){
    value.map( (item, i) => {
      if(i >2 && i <= 6){
        this.getLatestNews.push(item);
        
      }
    })
  }

  ngOnInit():void {
    this.serviceApi.getData().subscribe(
      {
        next: (res) => {
          this.heroSection(res);
          this.hotNews(res);
          this.latestNews(res);
        },
        error: (err) => console.log(err)
      }
    );
  }

}

