import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsCommentComponent } from './options-comment.component';

describe('OptionsCommentComponent', () => {
  let component: OptionsCommentComponent;
  let fixture: ComponentFixture<OptionsCommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionsCommentComponent]
    });
    fixture = TestBed.createComponent(OptionsCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
