import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


type typeNews = {
  url: string, title: string
}

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.css']
})

export class HotNewsComponent implements OnInit {
  
  constructor(
    private serviceApi: ApiService
   ) { }
  
  currentIndex = 0;

  hotNews: typeNews[] = [];

  ngOnInit() {

    this.serviceApi.getData().subscribe(
      {
        next: (res) => {
          res.map( (item, i) => {
            if( i <= 5 ){
              this.hotNews.push({ url: `/post/${item.id}`, title: item.titulo})
            }
          })
        
        }
      }
    )


    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.hotNews.length;
    }, 4200);


    
  }
}
