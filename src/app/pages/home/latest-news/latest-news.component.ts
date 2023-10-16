import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent {

  constructor(private apiService: ApiService ){}

  ngOnInit(){
    this.apiService.getData().subscribe(
      {
        next: (res) => console.log(res)
      }
    )
  }
}
