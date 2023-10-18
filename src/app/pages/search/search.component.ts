import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { newsData } from 'src/app/types/newsData';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  isTotalCurrent: number = 0;
  @Input()
  totalPerDisplay: number = 5;
  @Input()
  getSearch:string | null = null;

  @Input()
  getNewsAll: newsData[] = [];
  @Input()
  getLengthNews: number = 0;

  @Input()
  getNewsDisplay: newsData[] = []

  constructor(
    private route: ActivatedRoute,
    private serviceApi: ApiService,
    ){}

    ngOnInit(): void {
      this.route.paramMap.subscribe((value) => {
        this.getSearch = value.get('value');        
        this.updateData();
      });
  
    }

    updateData() {   
      this.getNewsDisplay = [];
  
      this.serviceApi.getSearch(this.getSearch).subscribe( res => {
        this.getNewsAll = res;
        this.getLengthNews = res.length;
        
  
        this.getNewsAll.map( (item, i) => {
          if(i >= 0 && i < this.totalPerDisplay){
            this.isTotalCurrent = i;
            this.getNewsDisplay.push(item);
          }
        })
  
      });
  
    }

    moreNews(){
      const isTotal = this.isTotalCurrent;
      this.getNewsAll.map((item, i) => {
        if(i > isTotal && i <= (isTotal + this.totalPerDisplay) && i <= this.getLengthNews){
          this.isTotalCurrent = i;
          this.getNewsDisplay.push(item);
        }
      })
    }

}
