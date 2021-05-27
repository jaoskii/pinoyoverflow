import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTopicsComponent } from './top-topics.component';

describe('TopTopicsComponent', () => {
  let component: TopTopicsComponent;
  let fixture: ComponentFixture<TopTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
