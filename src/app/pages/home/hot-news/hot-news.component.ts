import { Component, OnInit, Input } from '@angular/core';
import { typeNews } from 'src/app/types/newsData';

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.css']
})

export class HotNewsComponent implements OnInit {  

  currentIndex = 0;
  @Input()
  hotNews: typeNews[] = [];

  ngOnInit() {

    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.hotNews.length;
    }, 3500);
  
  }
}
