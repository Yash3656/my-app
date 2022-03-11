import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveExercise1Component } from './directive-exercise1.component';

describe('DirectiveExercise1Component', () => {
  let component: DirectiveExercise1Component;
  let fixture: ComponentFixture<DirectiveExercise1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveExercise1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveExercise1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
