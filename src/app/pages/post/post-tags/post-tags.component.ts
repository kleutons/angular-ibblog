import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-tags',
  templateUrl: './post-tags.component.html',
  styleUrls: ['./post-tags.component.css']
})
export class PostTagsComponent {
  @Input()
  tagCategory: string = '';
  @Input()
  tagLink: string = '';
}
