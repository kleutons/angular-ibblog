import { Component, Input } from '@angular/core';
import { typeBreadcrumbs } from 'src/app/types/newsData';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
 @Input()
 breadcrumbData: typeBreadcrumbs[] = [];
}
