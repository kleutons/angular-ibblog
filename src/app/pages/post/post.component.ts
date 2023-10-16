import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  constructor(private serviceApi: ApiService){}

  ngOnInit():void{
    this.serviceApi.getData().subscribe(
      res => {
        console.log(res);
      }
    )
  }
}
