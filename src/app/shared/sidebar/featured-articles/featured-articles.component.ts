import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { newsData } from 'src/app/types/newsData';

@Component({
  selector: 'app-featured-articles',
  templateUrl: './featured-articles.component.html',
  styleUrls: ['./featured-articles.component.css']
})
export class FeaturedArticlesComponent {
  bigNews!: newsData;
  featuredNews: newsData[] = [];

  constructor(
    private serviceApi: ApiService
   ) { }
  
   ngOnInit():void {
    this.serviceApi.getData().subscribe(
      {
        next: (res) => {
          res.map( (item, i) => {
            
            if(i == 0){
              this.bigNews = item;
            }else
            if(i > 0 && i <= 2){
              this.featuredNews.push(item)
            }
          })      
        },
        error: (err) => console.log(err)
      }
    );
   }
   
}
