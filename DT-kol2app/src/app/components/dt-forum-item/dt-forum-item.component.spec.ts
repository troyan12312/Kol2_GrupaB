import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DTForumItemComponent } from './dt-forum-item.component';

describe('DTForumItemComponent', () => {
  let component: DTForumItemComponent;
  let fixture: ComponentFixture<DTForumItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DTForumItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DTForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
