import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { newsData } from 'src/app/types/newsData';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  isTotalCurrent: number = 0;
  @Input()
  totalPerDisplay: number = 5;
  @Input()
  getCategory:string | null = null;
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

  updateArticleData() {   
    this.getNewsDisplay = [];

    this.serviceApi.getSearchFilterCategory(this.getCategory).subscribe( res => {
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

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.getCategory = value.get('category');
      this.updateArticleData();

    });

  }

}
