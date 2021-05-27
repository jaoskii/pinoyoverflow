import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowedCommunityPostsComponent } from './followed-community-posts.component';

describe('FollowedCommunityPostsComponent', () => {
  let component: FollowedCommunityPostsComponent;
  let fixture: ComponentFixture<FollowedCommunityPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowedCommunityPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowedCommunityPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
