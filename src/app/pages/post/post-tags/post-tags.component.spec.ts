import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTagsComponent } from './post-tags.component';

describe('PostTagsComponent', () => {
  let component: PostTagsComponent;
  let fixture: ComponentFixture<PostTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostTagsComponent]
    });
    fixture = TestBed.createComponent(PostTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
