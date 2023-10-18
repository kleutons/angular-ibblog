import { Component, Input } from '@angular/core';
import { newsData } from 'src/app/types/newsData';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-hero-seciton',
  templateUrl: './hero-seciton.component.html',
  styleUrls: ['./hero-seciton.component.css']
})
export class HeroSecitonComponent {
@Input()
bigNews!: newsData;
@Input()
featuredNews: newsData[] = [];

 constructor(
  private serviceApi: ApiService
 ) { }

//  ngOnInit():void {
//   this.serviceApi.getData().subscribe(
//     {
//       next: (res) => {
//         res.map( (item, i) => {
          
//           if(i == 0){
//             this.bigNews = item;
//           }else
//           if(i > 0 && i <= 2){
//             this.featuredNews.push(item)
//           }
//         })      
//       },
//       error: (err) => console.log(err)
//     }
//   );
//  }
}
