import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DTForumComponent } from './dt-forum.component';

describe('DTForumComponent', () => {
  let component: DTForumComponent;
  let fixture: ComponentFixture<DTForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DTForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DTForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
