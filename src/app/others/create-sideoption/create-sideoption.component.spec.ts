import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSideoptionComponent } from './create-sideoption.component';

describe('CreateSideoptionComponent', () => {
  let component: CreateSideoptionComponent;
  let fixture: ComponentFixture<CreateSideoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSideoptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSideoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
