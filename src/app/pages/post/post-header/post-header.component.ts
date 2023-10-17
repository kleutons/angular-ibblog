import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.css']
})
export class PostHeaderComponent {
 @Input()
 postHeaderTitle: string = '';
 @Input()
 postHeaderDate: string = '';

}
