import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ECategory, newsData, typeBreadcrumbs } from 'src/app/types/newsData';

@Component({
  selector: 'app-post-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  getId:string | null = null;
  @Input()
  getArticle!: newsData;

  @Input()
  articleBreadcrumb: typeBreadcrumbs[] = [];



  constructor(
    private route: ActivatedRoute,
    private serviceApi: ApiService,
    ){}
 

  updateArticleData() {
    this.serviceApi.getData().subscribe((res) => {
      this.getArticle = res.filter((item) => item.id == Number(this.getId))[0];
      const category:string = this.getArticle.editorias;
      this.articleBreadcrumb = [
        {
          link: '/search/category/news',
          name: 'Notícias'
        },
        {
          link: `/search/category/${category}`,
          name: category
        }
      ]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.getId = value.get('id');
      this.updateArticleData();
    });
  }
}
