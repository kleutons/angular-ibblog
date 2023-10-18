import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { newsData } from 'src/app/types/newsData';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent {
  isTotalCurrent: number = 6;
  totalPerDisplay: number = 3;
  totalMax: number = 26;  

  @Input()
  latestNews: newsData[] = [];

  constructor(private apiService: ApiService ){}

  moreNews(){
    const isTotal = this.isTotalCurrent;
    this.apiService.getData().subscribe(
      {
        next: (res) => {
          res.map( (item, i) => {
            
            if(i > isTotal && i <= (isTotal + this.totalPerDisplay) && i <= this.totalMax){
              this.isTotalCurrent = i;
              this.latestNews.push(item);
            }
          })
        },
        error: (err) => console.log(err)
      }
    )
  }

 

}
