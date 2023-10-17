import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { newsData } from 'src/app/types/newsData';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent {
  valueTotalNews: number = 0;
  private totalPerClick: number = 3;
  totalLimit: number = 26;

  latestNews: newsData[] = [];

  constructor(private apiService: ApiService ){}

  ngOnInit(){
    this.apiService.getData().subscribe(
      {
        next: (res) => {
          res.map( (item, i) => {
            
            if(i >2 && i <= 6){
              this.valueTotalNews = i;
              this.latestNews.push(item);
            }
          })
        },
        error: (err) => console.log(err)
      }
    )
  }

  moreNews(){
    const isTotal = this.valueTotalNews;
    this.apiService.getData().subscribe(
      {
        next: (res) => {
          res.map( (item, i) => {
            
            if(i > isTotal && i <= (isTotal + this.totalPerClick) && i <= this.totalLimit){
              this.valueTotalNews = i;
              this.latestNews.push(item);
            }
          })
        },
        error: (err) => console.log(err)
      }
    )
  }

 

}
