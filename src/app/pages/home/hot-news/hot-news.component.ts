import { Component, OnInit } from '@angular/core';


type typeNews = {
  url: string, title: string
}

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.css']
})

export class HotNewsComponent implements OnInit {

  currentIndex = 0;

  hotNews: typeNews[] = [
    {
      url: '/post/1',
      title: '11 dos melhores laptops avaliados com base no orçamento'
    },
    {
      url: '/post/2',
      title: 'Como sabemos que os desinfetantes devem matar o Covid-19'
    },
    {
      url: '/post/3',
      title: 'Os melhores jogos cooperativos offline em tela dividida do Xbox 360'
    },
    {
      url: '/post/4',
      title: 'Apple Watch Series 5 é o melhor já feito pelo consumidor'
    }
  ];

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.hotNews.length;
    }, 4200);
  }
}
